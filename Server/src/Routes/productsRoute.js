const express = require('express');
const router = express.Router();
const { getProducts,createProduct,updateProduct,deleteProduct} = require('../Controller/productsController');

//All routes
router.get('/', getProducts);
router.post('/add', createProduct);
router.put('/edit/:id', updateProduct);
router.delete('/remove/:id', deleteProduct);

module.exports = router;
