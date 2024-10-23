const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();// Import environment variables from.env file

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(cors({
    origin: [
        'http://localhost:3000', // For local development
        process.env.FRONTEND_URL,
        'https://tropicalbakingsweets.com', // Your production domain
        'https://tbs-back-production.up.railway.app', // The Railway backend URL
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


//Routes
const calendarRoutes = require('./Routes/calendarRoute');
app.use('/api/calendar', calendarRoutes);
console.log('calendar route is active')

const productRoutes = require('./Routes/productsRoute');
app.use('/api/products', productRoutes);
console.log('Products route is active')

const imageRoutes = require('./Routes/productGallery');
app.use('/api', imageRoutes);
console.log('gallery route is active')


//Server
let connectionString = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(connectionString)
.then(()=>{
    const port = process.env.PORT || 8080;
    console.log("Connected To DB")
    app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
    })
    }).catch((error) =>{
    console.log('Error connecting to MongoDB:', error)
    res.status(500).json({ message: 'Error connecting to MongoDB', error });
    })
