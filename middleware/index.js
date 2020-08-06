var Book = require('../models/book');
    Comment = require('../models/comments');
var midObj={};

midObj.checkOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Book.findById(req.params.id, function(err, foundBook){
            if(err){
                res.redirect("back");
            } else{
                if(foundBook.author.id.equals(req.user._id)){
                    next();
                } else{
                    res.redirect("back");
                }
            }
        });
    }else{
        res.redirect("back");
    }
}

midObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundcomment){
            // console.log(foundcomment);
            if(err){
                req.flash("error","Something went wrong.");
                res.redirect("back");
            } else{
                if(foundcomment.author.id.equals(req.user._id)){
                    next();
                } else{
                    res.redirect("back");
                }
            }
        });
    }else{
        res.redirect("back");
    }
}

midObj.isLoggedin = function(req, res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', "Please login first!");
    res.redirect('/login');
}

module.exports = midObj;
