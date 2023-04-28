const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://KUNAL:KUNAL9900@mernapp.oaibt56.mongodb.net/Swiggy');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'error in connecting to the database'));

db.once('open', function (err) {
    console.log("connected to the database");
});

module.exports = db;