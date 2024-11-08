const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();// Import environment variables from.env file

// Ensure uploads directories exist
const fs = require('fs');
const uploadsDir = path.join(__dirname, '../Uploads');
const productsDir = path.join(__dirname, '../Uploads/Products');
const calendarDir = path.join(__dirname, '../Uploads/Calendar');

// Create directories if they don't exist
[uploadsDir, productsDir, calendarDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const app = express();

// Middleware
app.use(express.json());


// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'https://www.tropicalbakingsweets.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));


// Serve React app (production build)
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/uploads/calendar', express.static(path.join(__dirname, '../Uploads/Calendar')));
app.use('/uploads/products', express.static(path.join(__dirname, '../Uploads/Products')));



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
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

//Debugging Routes
// console.log("Frontend URL:", process.env.FRONTEND_URL);
// console.log("DB URL:", process.env.MONGODB_CONNECTION_STRING);
// console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);


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
    })
