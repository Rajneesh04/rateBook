var express     = require('express'),
    router      = express.Router(),
    book  = require('../models/book'),
    Comment     = require('../models/comments'),
    middleware  = require('../middleware');


//NEW
router.get("/books/:id/comments/new",middleware.isLoggedin, function(req, res){
    book.findById(req.params.id, function(err, foundbook){
        if(err){
            console.log("Couldn't find book");
        } else{
            res.render("comments/new", {book:foundbook});
        }
    });
    
});

router.post("/books/:id/comments",middleware.isLoggedin, function(req, res){
    book.findById(req.params.id,function(err, foundbook){
        if(err){
            console.log("Couldn't find book");
        } else{
            var comment = {
                text:req.body.comment,
                author:{
                    id:req.user._id,
                    username:req.user.username
                }
            }
            Comment.create(comment, function(err, comment){
                if(err){
                    console.log("couldn't post comment");
                } else{
                    // console.log();
                    // comment.author.username= req.user.username;
                    // comment.author.id = req.user._id;
                    // console.log(comment);
                    // comment.save();
                    foundbook.comments.push(comment);
                    foundbook.save();
                    res.redirect('/books/'+req.params.id);                    
                }
            });
            // foundbook.comments.push(req.body.comment);
            
        }
    });
});


//edit
router.get("/books/:id/comments/:comment_id/edit",middleware.checkCommentOwnership, function(req, res){
    //get id of book
    //get id of comment
    Comment.findById(req.params.comment_id, function(err, comment){
        // console.log(req.params.id);
        if(err){
            console.log("couldn't edit comment");
        } else{
            // res.send("fjkdsnfk");
            res.render("comments/edit",{book_id:req.params.id, comment:comment});
        }
    });
    
});

// update
router.put("/books/:id/comments/:comment_id",middleware.checkCommentOwnership, function(req, res){
    var comment ={
        text:req.body.comment,
        author:{
            id:req.user.id,
            username:req.user.username
        }
    };
    Comment.findByIdAndUpdate(req.params.comment_id,comment, function(err, comment){
        if(err){
            console.log("Couldn't update the comment");
        } else{
            res.redirect("/books/"+req.params.id);
        }
    });
});


//DESTROY ROUTE
router.delete('/books/:id/comments/:comment_id',middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            console.log("Couldn't delete the comment.");
        }else{
            res.redirect('/books/'+req.params.id);
        }
    });
});


module.exports = router;

// 5f29b3f3533e4b554f7d5cf4