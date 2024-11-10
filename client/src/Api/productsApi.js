import axios from 'axios';

// Create a base URL that works for both development and production
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getProducts = () => api.get('/api/products');
export const createProduct = (product) => api.post('/api/products', product);
export const updateProduct = (id, formData) => {
    return axios.put(`${baseURL}/api/products/edit/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
export const deleteProduct = (id) => api.delete(`/api/products/${id}`);

