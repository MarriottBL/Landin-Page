const express = require('express');
const router = express.Router();
const { getProducts,createProduct,updateProduct,deleteProduct} = require('../Controller/productsController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/products' }); // Configure as needed


//All routes
router.get('/', getProducts);
router.post('/add', upload.single('image'), createProduct);
router.put('/edit/:id', updateProduct);
router.delete('/remove/:id', deleteProduct);

module.exports = router;
