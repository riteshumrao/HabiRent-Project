const express = require("express");
// 1. Initialize router with mergeParams
const router = express.Router({ mergeParams: true });

// 2. Require necessary models and middleware
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js"); // Adjust path if needed

// 3. Booking Route
// The path is now just "/" because "/listings/:id/bookings" is in app.js
router.post("/", 
  isLoggedIn, // Make sure user is logged in
  async (req, res) => {
    try {
      // req.params.id is available because of mergeParams
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
      }

      const checkInDate = new Date(req.body.booking.checkIn);
      const checkOutDate = new Date(req.body.booking.checkOut);

      // --- START: Conflict Check ---
      // 1. Check if check-out is before check-in
      if (checkInDate >= checkOutDate) {
        req.flash("error", "Check-out date must be after check-in date.");
        return res.redirect(`/listings/${req.params.id}`);
      }
      
      // 2. Check for overlapping bookings
      const existingBooking = await Booking.findOne({
        listing: listing._id,
        $or: [
          // Case 1: New booking starts during an existing booking
          { checkIn: { $lte: checkInDate }, checkOut: { $gt: checkInDate } },
          // Case 2: New booking ends during an existing booking
          { checkIn: { $lt: checkOutDate }, checkOut: { $gte: checkOutDate } },
          // Case 3: New booking surrounds an existing booking
          { checkIn: { $gte: checkInDate }, checkOut: { $lte: checkOutDate } }
        ]
      });

      if (existingBooking) {
        req.flash("error", "Sorry, those dates are already taken.");
        return res.redirect(`/listings/${req.params.id}`);
      }
      // --- END: Conflict Check ---

      // Calculate price
      const days = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);
      const totalPrice = days * listing.price;
    
      // Create and save the new booking
      const newBooking = new Booking(req.body.booking);
      newBooking.user = req.user._id;
      newBooking.listing = listing._id;
      newBooking.totalPrice = totalPrice;
    
      await newBooking.save();
    
      req.flash("success", "Booking successful!");
      res.redirect(`/listings/${listing._id}`);

    } catch (e) {
      req.flash("error", "Could not create booking. " + e.message);
      res.redirect(`/listings/${req.params.id}`);
    }
  }
);

// 4. Export the router
module.exports = router;