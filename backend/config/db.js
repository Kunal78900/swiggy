const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://KUNAL:KUNAL9900@mernapp.oaibt56.mongodb.net/Swiggy');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'error in connecting to the database'));

db.once('open', async (err,result) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected to the database");

        
        const fetched_data = await db.collection('food_items').find({}).toArray(function(err,data){
               
            console.log("hi");
        
        })
    }
});

module.exports = db;