const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


const getImages = async (req, res) => {
    try {
        const directoryPath = path.join(__dirname, '../../../client/public/ProductGallery/');
        console.log(directoryPath)
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error('Error reading the directory:', err);
                return res.status(500).json({ message: 'Unable to scan directory' });
            }
            const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)); // Filter image files only
            res.json(imageFiles);
        });
    } catch (err) {
        res.status(500).json({ message: 'Error reading image files' });
    }
};

router.get('/images', getImages);



module.exports = router;
