const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();// Import environment variables from.env file

const app = express();

// Middleware
app.use(express.json());


// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'https://www.tropicalbakingsweets.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions), (req, res, next) => {
    console.log(`CORS headers set for origin: ${req.headers.origin}`);
    next();
});


// Serve React app (production build)
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/uploads/calendar', (req, res, next) => {
    res.header('Content-Type', 'image/jpeg'); // Or use dynamic types if necessary
    console.log(`Serving Calendar images from: ${path.join(__dirname, '../../Uploads/Calendar')}`);
    next();
}, express.static(path.join(__dirname, '../Uploads/Calendar')));
app.use('/uploads/products', (req, res, next) => {
    res.header('Content-Type', 'image/jpeg'); // Set the correct MIME type here
    console.log(`Serving product images from: ${path.join(__dirname, '../../Uploads/Products')}`);
    next();
}, express.static(path.join(__dirname, '../Uploads/Products')));


// Redirect HTTP to HTTPS
app.use((req, res, next) => {
    if (req.secure || process.env.NODE_ENV !== 'production') {
        next();
    } else {
        res.redirect(`https://${req.headers.host}${req.url}`);
    }
});


//Routes
const calendarRoutes = require('./Routes/calendarRoute');
app.use('/api/calendar', calendarRoutes);

const productRoutes = require('./Routes/productsRoute');
app.use('/api/products', productRoutes);


//Catch all Routes
app.get('*', (req, res) => {
    console.log("Serving frontend from:", path.join(__dirname, '../../client/build/index.html'));
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

//Debugging Routes
// console.log("Frontend URL:", process.env.FRONTEND_URL);
// console.log("DB URL:", process.env.MONGODB_CONNECTION_STRING);
// console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
app.use((req, res, next) => {
    if (req.url.startsWith('/uploads/products')) {
        console.log("Static file requested:", req.url);
    }
    next();
});


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
