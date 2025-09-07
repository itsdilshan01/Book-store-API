require('dotenv').config();
const express = require('express');
const connectToDb = require('./database/db.js');
const BookRoutes = require('./routes/book-routes.js')
const app = express();


const PORT = process.env.PORT || 3000


//connect to database
connectToDb();

//middleware
app.use(express.json());

//set-up routes
app.use('/api/books', BookRoutes)

//our PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

