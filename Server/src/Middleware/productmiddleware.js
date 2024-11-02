// productmiddleware.js
const multer = require('multer');
const path = require('path');

// Define the upload path without creating it initially
const productUploadPath = path.join(__dirname, '../../../Uploads/Products');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Ensure the directory exists only when an actual upload occurs
        if (!fs.existsSync(productUploadPath)) {
            fs.mkdirSync(productUploadPath, { recursive: true });
        }
        cb(null, productUploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
