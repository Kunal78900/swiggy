const express= require('express')
const db = require('./config/db');
const app = express()
const port  = 8000;



app.get('/', (req, res) => {
    res.send('Welcome')}
    )
app.use('/api',require('./routes/login')) 
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})