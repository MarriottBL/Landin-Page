const Product = require ('../Model/products.js');


//GET ALL
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log("is working", products)
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//POST
const createProduct = async (req, res) => {
    console.log("Incoming request for products");
    const products = await Product.find();
    console.log("Fetched products:", products);
    res.status(200).json(products);
}

//PUT BY ID
const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateProduct) return res.status(404).send('Product not found');
        res.send(updateProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//DELETE BY ID
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