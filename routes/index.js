var express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    User        = require('../models/user'),
    middleware  = require('../middleware');



 router.get("/", function(req, res){
    res.render("landing");
});

//register
router.get('/register', function(req, res){
    res.render('auth/register',{page: 'register'});
});

router.post('/register', function(req, res){
    var newUser = new User({username:req.body.username});
    // console.log(newUser);
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            // req.flash("error", err.message);
            // console.log(err.message);
            // console.log("Couldn't register");
            return res.render("auth/register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to rateBook "+ user.username);
            res.redirect('/books');
        });
    });
});

//login
router.get('/login', function(req, res){
    res.render('auth/login',{page: 'login'});
});

router.post('/login',passport.authenticate("local",
{
    successRedirect:"/books",
    failureRedirect:"/login"
}) ,function(req, res){
    req.flash("success", "Welcome to YelpCamp "+ user.username);
});

//logout
router.get("/logout",middleware.isLoggedin, function(req, res){
    req.logOut();
    req.flash("success", "Logged you out!");
    res.redirect('/books');
});

module.exports = router;