var express                = require("express"),
    app                    = express(),
    bodyParser             = require("body-parser"),
    mongoose               = require("mongoose"),
    passport               = require('passport'),
    LocalStrategy          = require('passport-local'),
    passportLocalMongoose  = require('passport-local-mongoose'),
    expressSession         = require('express-session'),
    methodOverride         = require('method-override'),
    flash                  = require('connect-flash'),
    Book                   = require('./models/book'),
    Comment                = require('./models/comments'),
    User                   = require('./models/user.js'),
    bookRoute              = require('./routes/book'),
    commentRoute           = require('./routes/comment'),
    indexRoutes            = require('./routes/index');
    // seedDB                 = require('./seeds');
    // 
    // 
    // mongodb+srv://bookApp:<password>@bookapp.qj93w.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/bookapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.use(methodOverride("_method"));
app.use(expressSession({
    secret: "auth secret",
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash());


app.use(function(req, res,next){
    res.locals.currentUser = req.user;
    res.locals.error =req.flash("error");
    res.locals.success =req.flash("success");
    next();
});
// seedDB();
app.use(indexRoutes);
app.use(bookRoute);
app.use(commentRoute);

var PORT = process.env.PORT || 3000;
app.listen(PORT);