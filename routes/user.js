const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js')
const userController = require('../controllers/users.js');
const { render } = require('ejs');


router.route("/signup")
.get(userController.renderSignup) // render signup form
.post(wrapAsync(userController.signup)); // signup logic




router.route("/login")
.get(userController.renderLogin) // render login form
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), wrapAsync(userController.login)); // login logic


// logout logic
router.get("/logout", userController.logout);

module.exports = router;