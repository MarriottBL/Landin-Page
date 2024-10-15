const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();// Import environment variables from.env file

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//Routes
const calendarRoutes = require('./Routes/calendarRoute');
app.use('/api/calendar', calendarRoutes);

const productRoutes = require('./Routes/productsRoute');
app.use('/api/products', productRoutes);

const imageRoutes = require('./Routes/productGallery');
app.use('/api', imageRoutes);

//Server
let connectionString = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(connectionString)
.then(()=>{
    const port = 8000
    console.log("Connected To DB")
    app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
    })
    }).catch((error) =>{
    console.log('Error connecting to MongoDB:', error)
    })
