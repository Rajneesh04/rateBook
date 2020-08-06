var mongoose               = require('mongoose'),
    passport               = require('passport'),
    passportLocalMongoose  = require('passport-local-mongoose');

var Schema = new mongoose.Schema({
    username: String,
    password: String
});

Schema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', Schema);