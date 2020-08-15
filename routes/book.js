var express     = require('express'),
    router      = express.Router(),
    Book  = require('../models/book'),
    middleware  = require('../middleware');


// seedDB();
//INDEX- display all books
router.get("/books", function(req, res){
    Book.find({}, function(err, books){
        if(err){
            console.log("Error in adding new book");
        } else{
            //console.log(books);
            res.render("books/index",{books:books,page: 'books'});
        }
    });
    
});

//CREATE - add new book to database 
router.post("/books",middleware.isLoggedin, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var add = {
        name:name,
        image:image,
        description:description,
        author:{
            id:req.user._id,
            username:req.user.username
        }
    };
    //create a new book and save to database
    Book.create(add, function(err, camp){
        if(err){
            console.log("Can't add new book");
        }else{
            res.redirect("/books");
        }
    });
    
});

//NEW - show form to ceate new book
router.get("/books/new",middleware.isLoggedin, function(req, res){
    res.render("books/new");
});


//SHOW - show more info about one book
router.get("/books/:id",middleware.isLoggedin, function(req, res){
    //campgrouns.findById(id, callback); id = req.params.id
    // console.log(req.params.id);
    Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
        if(err){
            console.log("Can't find the element by id");
        } else{
            // console.log(freq.body.comment,oundBook);
            res.render("books/show", {book:foundBook});
            //res.send("fnskdf");
        }
    });
});

//EDIT
router.get("/books/:id/edit",middleware.checkOwnership, function(req, res){
    Book.findById(req.params.id,function(err, camp){
        if(err){
            console.log("Couldn't Update");
        } else{
            res.render("books/edit",{book:camp});
        }
    });
    
});

//UPDATE
router.put("/books/:id",middleware.checkOwnership, function(req, res){
    var camp = req.body.book;
    var author = {
        id:req.user.id,
        username:req.user.username
    };
    // camp.author =author;
    Book.findByIdAndUpdate(req.params.id, camp, function(err, camps){
        if(err){
            console.log("Couldn't update");
        }else{
            res.redirect("/books/"+req.params.id);
        }
    });
});

//destroy
router.delete("/books/:id",middleware.checkOwnership, function(req, res){
    Book.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("Couldn't delete.")
        } else{
            var comments = book.comments;
            comments.forEach(function(commentId){
                Comment.findByIdAndRemove(commentId, function(){
                    console.log("Comment deleted");
                });
            });
            res.redirect("/books");
        }
    });
});

module.exports = router;
