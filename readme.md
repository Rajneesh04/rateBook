Install the dependencies from package.json files.

#Style the books page
*Add a better header/titile
*Make books display in a grid

#Style the Navbar and Form
*Add a navbar to all templates
*Style the new book form

#Add Mongoose
*Install and configure nongoose
*Setup campground model
*Use campground model inside of our routes!


RESTFUL ROUTES

name         url             verb    description
---------------------------------------
INDEX       /camp            GET     display all campgrounds
CREATE      /camp            POST    manipulate the database to create new campground
NEW         /camp/new        GET     show form to add new campground
SHOW        /camp/:id        GET     show more info about one campground
EDIT        /camp/:id/edit   GET     shows form to edit the preexisting camps
UPDATE      /camp/:id        PUT     manipulate the database to update prexisting camps

DESTROY     /camp/:id        DELETE  manipulate the database to delete the camp


CRUD - create read update remove


#clean up the code
*make separeate files for schemas

#comments
*create comment model and associate it with campground model
*show comments

#comments New?Create
*discuss nested routes
*add the comment new and create routes
*add the new comment form


#auth
*create user model
*configure passport
