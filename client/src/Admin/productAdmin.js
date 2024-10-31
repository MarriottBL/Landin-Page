// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { createProduct, updateProduct } from '../Api/productsApi';

// const AdminProductForm = ({ editMode, productToEdit, onSuccess }) => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [imageOptions, setImageOptions] = useState([]);

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     useEffect(() => {
//         if (editMode && productToEdit) {
//             setName(productToEdit.name);
//             setDescription(productToEdit.description);
//             setPrice(productToEdit.price);
//             setCategory(productToEdit.category);
//             setImageUrl(productToEdit.imageUrl);
            
//         } else {
//             resetForm();
//         }
//     }, [editMode, productToEdit]);

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/images');
//             setImageOptions(response.data);
//         } catch (error) {
//             console.error('Error fetching images:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newProduct = { name, description, price, category, imageUrl };

//         try {
//             if (editMode) {
//                 await updateProduct(productToEdit._id, newProduct);
//                 alert('Product updated successfully!');
//             } else {
//                 await createProduct(newProduct);
//                 alert('Product added successfully!');
//             }
//             resetForm();
//             onSuccess();
//         } catch (error) {
//             console.error('Error handling product:', error);
//             alert('Failed to add/update product. Please try again.');
//         }
//     };

//     const resetForm = () => {
//         setName('');
//         setDescription('');
//         setPrice('');
//         setCategory('');
//         setImageUrl('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="admin-product-form">
//             <h2>{editMode ? 'Edit Product' : 'Add a New Product'}</h2>
//             <label>Product Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//             <label>Description:</label>
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

//             <label>Price:</label>
//             <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

//             <label>Category:</label>
//             <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

//             <label>Image URL:</label>
//             <select value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required>
//                 <option value="">Select an Image</option>
//                 {imageOptions.map((image, index) => (
//                     <option key={index} value={`/ProductGallery/${image}`}>
//                         {image}
//                     </option>
//                 ))}
//             </select>

//             <button type="submit">{editMode ? 'Update Product' : 'Add Product'}</button>
//         </form>
//     );
// };

// export default AdminProductForm;
