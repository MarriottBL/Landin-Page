const Product = require('../Model/products.js');

// GET ALL
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST
const createProduct = async (req, res) => {
    // console.log("Incoming request to create a product");

    // Use req.file.filename for image path if image is uploaded
    const imageUrl = req.file ? `/uploads/products/${req.file.filename}` : null;

    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        imageUrl: imageUrl,
    });

    // console.log("Image file info:", req.file);
    try {
        const savedProduct = await newProduct.save();
        // console.log("Product created:", savedProduct);
        res.status(201).json(savedProduct);
    } catch (err) {
        // console.error("Error creating product:", err);
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
