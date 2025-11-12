const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



// Index route to show all listings
module.exports.index = async (req, res) => {
  // 1. Get BOTH category and search from the query
  const { category, search } = req.query;

  // 2. Create a filter object
  let filter = {};
  if (category) {
    filter.category = category; // Add category filter if it exists
  }

  // 3. Add SEARCH filter if it exists
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }

  // 4. Find listings using the combined filter
  const allListings = await Listing.find(filter);

  // 5. Render the page, passing all necessary variables
  res.render("listings/index.ejs", {
    allListings: allListings,
    currentCategory: category,
    // We pass 'search' here so 'searchQuery' in the navbar
    // gets its value from res.locals
  });
};


//new route to show form to create new listing
module.exports.renderNewForm = (req, res) => {
    const categories = Listing.schema.path('category').enumValues;
    res.render("listings/new.ejs", { categories: categories });
};


// Show route to show details of a particular listing
module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    res.render("listings/show.ejs", { listing, mapToken: process.env.MAP_TOKEN });
};

//Create route
module.exports.createListing = async (req, res, next) => {
   let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
    .send();
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    let  savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "Successfully created a new listing!");
    res.redirect("/listings");

};

//Edit route to show edit form
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  // 1. Get all category enum values from the schema
  const categories = Listing.schema.path("category").enumValues;

  // 2. Pass the 'categories' array to your template
  res.render("listings/edit.ejs", { listing, originalImageUrl, categories });
};


//Update route to update a particular listing
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
  let listing =  await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
    };
   req.flash("success", "listing updated!");
   res.redirect(`/listings/${id}`);
};


//Delete route to delete a particular listing
module.exports.destroyListing = async (req, res ) => {
    let {id} = req.params;
  let deletedListing = await  Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Successfully deleted a listing!");
  res.redirect("/listings");
};