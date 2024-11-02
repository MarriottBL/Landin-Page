const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../Controller/productsController');
const productUpload = require('../Middleware/productmiddleware'); // Import the middleware

// Routes
router.get('/', getProducts);
router.post('/add', productUpload.single('image'), createProduct); // Use productUpload here
router.put('/edit/:id', updateProduct);
router.delete('/remove/:id', deleteProduct);

module.exports = router;
