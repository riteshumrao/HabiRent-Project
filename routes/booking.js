const express = require("express");
const router = express.Router();

// Require necessary models and middleware
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js"); 
const { isLoggedIn } = require("../middleware.js"); // Assuming middleware is in this location
const wrapAsync = require("../utils/wrapAsync.js"); // Assuming you have a wrapAsync utility

// 1. "My Bookings" Page Route (UPDATED)
router.get("/my-bookings", 
    isLoggedIn, 
    wrapAsync(async (req, res) => {
        const now = new Date();
        
        // Find all bookings made by the currently logged-in user
        const allBookings = await Booking.find({ user: req.user._id })
            .populate("listing") // 'populate' fetches the full listing details
            .sort({ checkIn: 1 }); // Sort bookings by check-in date (oldest to newest)

        // Separate bookings into upcoming and past
        const upcomingBookings = allBookings.filter(booking => 
            new Date(booking.checkOut) >= now
        );
        
        const pastBookings = allBookings.filter(booking => 
            new Date(booking.checkOut) < now
        );

        res.render("bookings/bookings.ejs", { 
            upcomingBookings, 
            pastBookings 
        });
    })
);

// 2. "Cancel Booking" Route
router.delete("/my-bookings/:id", 
    isLoggedIn, 
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const booking = await Booking.findById(id);

        // Authorization: Check if the current user is the one who made the booking
        if (!booking || !booking.user.equals(req.user._id)) {
            req.flash("error", "You are not authorized to cancel this booking.");
            return res.redirect("/my-bookings");
        }

        // Time Check: Check if cancellation is at least 4 hours before check-in
        const now = new Date();
        const checkInDate = new Date(booking.checkIn);
        const timeDiff = checkInDate.getTime() - now.getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        if (hoursDiff < 4) {
            req.flash("error", "Cannot cancel a booking within 4 hours of check-in.");
            return res.redirect("/my-bookings");
        }

        // If all checks pass, delete the booking
        await Booking.findByIdAndDelete(id);

        req.flash("success", "Booking cancelled successfully.");
        res.redirect("/my-bookings");
    })
);

// We still need the booking creation route from your original file
// 3. Booking Create Route (UPDATED with Past Date Check)
router.post("/listings/:id/bookings", // Make sure this path matches your app.js
    isLoggedIn,
    wrapAsync(async (req, res) => {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listings");
        }

        // --- START: Date Validation ---
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to midnight (start of today)

        const checkInDate = new Date(req.body.booking.checkIn);
        const checkOutDate = new Date(req.body.booking.checkOut);

        // 1. NEW CHECK: Check if check-in is in the past
        if (checkInDate < today) {
            req.flash("error", "Cannot book a check-in date in the past.");
            return res.redirect(`/listings/${req.params.id}`);
        }

        // 2. Check if check-out is before check-in
        if (checkInDate >= checkOutDate) {
            req.flash("error", "Check-out date must be after check-in date.");
            return res.redirect(`/listings/${req.params.id}`);
        }
        
        // 3. Check for overlapping bookings
        const existingBooking = await Booking.findOne({
            listing: listing._id,
            $or: [
                { checkIn: { $lte: checkInDate }, checkOut: { $gt: checkInDate } },
                { checkIn: { $lt: checkOutDate }, checkOut: { $gte: checkOutDate } },
                { checkIn: { $gte: checkInDate }, checkOut: { $lte: checkOutDate } }
            ]
        });

        if (existingBooking) {
            req.flash("error", "Sorry, those dates are already taken.");
            return res.redirect(`/listings/${req.params.id}`);
        }
        // --- END: Date Validation ---

        const days = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);
        const totalPrice = days * listing.price;
        
        const newBooking = new Booking(req.body.booking);
        newBooking.user = req.user._id;
        newBooking.listing = listing._id;
        newBooking.totalPrice = totalPrice;
        
        await newBooking.save();
        
        req.flash("success", "Booking successful!");
        res.redirect("/my-bookings");
    })
);


module.exports = router;