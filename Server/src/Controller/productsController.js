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
    try {
        console.log('Received request body:', req.body);
        console.log('Received file:', req.file);

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        if (!req.body.name || !req.body.price) {
            return res.status(400).json({ message: "Name and price are required" });
        }

        const imageUrl = `/uploads/products/${req.file.filename}`;
        
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description || '',
            price: parseFloat(req.body.price),
            category: req.body.category || '',
            imageUrl: imageUrl,
        });

        const savedProduct = await newProduct.save();
        console.log('Product saved successfully:', savedProduct);
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error("Error creating product:", err);
        res.status(500).json({
            message: "Failed to save product",
            error: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        });
    }
};

// PUT BY ID
const updateProduct = async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            description: req.body.description,
            price: parseFloat(req.body.price),
            category: req.body.category
        };

        // If a new image is uploaded, update the imageUrl
        if (req.file) {
            updateData.imageUrl = `/uploads/products/${req.file.filename}`;
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
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
