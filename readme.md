Link to website : https://damp-bastion-60090.herokuapp.com/



Install the dependencies from package.json files.
"dependencies": {
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "method-override": "^3.0.0",
    "mongoose": "^5.9.27",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^6.0.1"
  }

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
INDEX       /book            GET     display all books
CREATE      /book            POST    manipulate the database to create new books
NEW         /book/new        GET     show form to add new books
SHOW        /book/:id        GET     show more info about one books
EDIT        /book/:id/edit   GET     shows form to edit the preexisting book
UPDATE      /book/:id        PUT     manipulate the database to update prexisting book

DESTROY     /camp/:id        DELETE  manipulate the database to delete the book


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
