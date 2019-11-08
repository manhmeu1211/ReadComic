var mongoose = require('mongoose').;
//Mongo db
const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://manhemu:25251325@cluster0-trwim.azure.mongodb.net/test?retryWrites=true&w=majority"
const client = new mongoClient(uri, {useNewUrlParser: true});

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb+srv://manhemu:25251325@cluster0-trwim.azure.mongodb.net/test?retryWrites=true&w=majority');


/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Book = mongoose.model('Book', {name:String, writer: String, dateUpload : String });

/**
 * Lets Use our Models
 * */

//Lets create a new user
var book= new B({name: 'Another', writer: "Ja", dateUpload: "12/11/2019"});

//Some modifications in user object
book.name = book.name.toUpperCase();

//Lets try to print and see it. You will see _id is assigned.
console.log();

//Lets save it
book.save(function (err, userObj) {
    if (err) {
        console.log(err);
    } else {
        console.log('saved successfully:', userObj);
    }
});
