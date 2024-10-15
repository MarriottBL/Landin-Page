import React, { useEffect, useState } from 'react';
import { deleteProduct, getProducts } from '../Api/productsApi'; // Axios functions
import './admin.css';
import AdminProductForm from './productAdmin';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleEdit = (product) => {
        setEditMode(true);
        setEditProduct(product);
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product. Please try again.');
        }
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditProduct(null);
    };

    return (
        <div className="admin-page">
            <AdminProductForm
                editMode={editMode}
                productToEdit={editProduct}
                onSuccess={() => {
                    fetchProducts();
                    setEditMode(false);
                    setEditProduct(null);
                }}
            />

            {editMode && (
                <button onClick={handleCancelEdit} className="cancel-edit-button">
                    Back to Add Product
                </button>
            )}

            <h2>Products List</h2>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product._id} className="product-item">
                        <span>{product.name} - ${product.price}</span>
                        <button onClick={() => handleEdit(product)} className='edit'>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
