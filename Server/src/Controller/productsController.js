const Product = require('../Model/products.js');

// GET ALL
const getProducts = async (req, res) => {
        console.log("GET /api/products called");
    try {
        const products = await Product.find();
        // console.log("Fetched Products:", products);
        res.json(products);
    } catch (err) {
        // console.error("Error fetching products:", err.message);
        res.status(500).json({ message: err.message });
    }
}

// POST
const createProduct = async (req, res) => {
    // console.log("POST /api/products/add called");
    // console.log("Data received:", req.body);
    const imageUrl = req.file ? `/uploads/products/${req.file.filename}` : null;

    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        imageUrl: imageUrl,
    });
    console.log("Product image URL:", Product.imageUrl);
    try {
        const savedProduct = await newProduct.save();
        // console.log("New Product saved:", savedProduct);
        res.status(201).json(savedProduct);
    } catch (err) {
        // console.error("Error creating product:", err.message);
        res.status(400).json({ message: err.message });
    }
};

// PUT BY ID
const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateProduct) return res.status(404).send('Product not found');
        res.send(updateProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// DELETE BY ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        res.send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
