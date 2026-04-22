const User = require('../models/user.js');

//render signup form
module.exports.renderSignup = (req,res) => {
    res.render("users/signup.ejs");
};


//signup logic
module.exports.signup = async (req, res) => {
    try{
    let {username, email, password} = req.body;
    const newUser = new User({username, email});
    const registeredUser =  await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to HabiRent!");
        res.redirect("/listings");

    })} catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    };
};

//render login form
module.exports.renderLogin = (req, res) => {
    res.render("users/login.ejs");
};

//login logic
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to HabiRent! You are logged in.");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};


//logout logic
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
    if(err){
      return  next(err);
    }
    req.flash("success", "you are logged out now.")
    res.redirect("/listings");
    });
}