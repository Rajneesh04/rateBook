Link to website : https://damp-bastion-60090.herokuapp.com/  
  
  
Install the dependencies from package.json files.    
**Dependencies:**  

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
    
**RESTFUL ROUTES**  
  
    name         url             verb    description  
    ---------------------------------------  
    INDEX       /book             GET     display all books  
    CREATE      /book             POST    manipulate the database to create new books  
    NEW         /book/new         GET     show form to add new books  
    SHOW        /book/:id         GET     show more info about one books  
    EDIT        /book/:id/edit    GET     shows form to edit the preexisting book  
    UPDATE      /book/:id         PUT     manipulate the database to update prexisting book    
    DESTROY     /book/:id         DELETE  manipulate the database to delete the book  
  
  

