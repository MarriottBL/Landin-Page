// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { validateProduct } from '../utils/validation';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// const AdminProductForm = ({ editMode, productToEdit, onSuccess }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         image: null
//     });
//     const [formErrors, setFormErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [imagePreview, setImagePreview] = useState(null);

//     useEffect(() => {
//         if (editMode && productToEdit) {
//             const imageUrl = productToEdit.imageUrl.startsWith('http')
//                 ? productToEdit.imageUrl
//                 : `${API_URL}${productToEdit.imageUrl}`;
            
//             setFormData({
//                 name: productToEdit.name || '',
//                 description: productToEdit.description || '',
//                 price: productToEdit.price || '',
//                 category: productToEdit.category || '',
//                 image: null
//             });
//             setImagePreview(imageUrl);
//         } else {
//             setFormData({
//                 name: '',
//                 description: '',
//                 price: '',
//                 category: '',
//                 image: null
//             });
//             setImagePreview(null);
//         }
//     }, [editMode, productToEdit]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         if (formErrors[name]) {
//             setFormErrors(prev => ({
//                 ...prev,
//                 [name]: null
//             }));
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setFormData(prev => ({
//                 ...prev,
//                 image: file
//             }));
            
//             const previewUrl = URL.createObjectURL(file);
//             setImagePreview(previewUrl);
            
//             if (formErrors.image) {
//                 setFormErrors(prev => ({
//                     ...prev,
//                     image: null
//                 }));
//             }
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const errors = validateProduct({ ...formData, editMode });
//         if (Object.keys(errors).length > 0) {
//             setFormErrors(errors);
//             return;
//         }

//         setIsLoading(true);
        
//         const submitData = new FormData();
//         if (formData.image || !editMode) {
//             submitData.append('image', formData.image);
//         }
//         submitData.append('name', formData.name);
//         submitData.append('description', formData.description);
//         submitData.append('price', formData.price);
//         submitData.append('category', formData.category);

//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 }
//             };

//             const url = editMode 
//                 ? `${API_URL}/api/products/edit/${productToEdit._id}`
//                 : `${API_URL}/api/products/add`;
            
//             const method = editMode ? 'put' : 'post';
            
//             await axios[method](url, submitData, config);
//             alert(editMode ? 'Product updated successfully!' : 'Product added successfully!');
//             resetForm();
//             onSuccess();
//         } catch (error) {
//             alert(error.response?.data?.message || 'Failed to save product');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             name: '',
//             description: '',
//             price: '',
//             category: '',
//             image: null
//         });
//         setImagePreview(null);
//         setFormErrors({});
//     };

//     return (
//         <form onSubmit={handleSubmit} className="admin-form">
//             <h2>{editMode ? 'Edit Product' : 'Add New Product'}</h2>
            
//             <div className="form-group">
//                 <label>Product Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className={formErrors.name ? 'error' : ''}
//                 />
//                 {formErrors.name && <span className="error-message">{formErrors.name}</span>}
//             </div>

//             <div className="form-group">
//                 <label>Description:</label>
//                 <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Price:</label>
//                 <input
//                     type="number"
//                     name="price"
//                     min="0"
//                     step="0.01"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                     className={formErrors.price ? 'error' : ''}
//                 />
//                 {formErrors.price && <span className="error-message">{formErrors.price}</span>}
//             </div>

//             <div className="form-group">
//                 <label>Category:</label>
//                 <input
//                     type="text"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Image:</label>
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     accept="image/*"
//                     className={formErrors.image ? 'error' : ''}
//                 />
//                 {formErrors.image && <span className="error-message">{formErrors.image}</span>}
//                 {imagePreview && (
//                     <div className="image-preview">
//                         <img 
//                             src={imagePreview.startsWith('blob:') || imagePreview.startsWith('http') 
//                                 ? imagePreview 
//                                 : `${API_URL}${imagePreview}`}
//                             alt="Preview" 
//                             style={{ 
//                                 maxWidth: '200px',
//                                 maxHeight: '200px',
//                                 objectFit: 'contain',
//                                 marginTop: '10px'
//                             }} 
//                         />
//                     </div>
//                 )}
//             </div>

//             <button type="submit" disabled={isLoading}>
//                 {isLoading 
//                     ? 'Saving...' 
//                     : (editMode ? 'Update Product' : 'Add Product')
//                 }
//             </button>
//         </form>
//     );
// };

// export default AdminProductForm;
