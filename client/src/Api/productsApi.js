import axios from 'axios';

// const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Mock data for products
const mockProductsData = [
    { id: 1, name: 'Product 1', price: 10.0, imageUrl: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 20.0, imageUrl: 'image2.jpg' },
];

// Mock functions to simulate API calls
export const getProducts = () => {
    // return api.get('/api/products');
    // Use mock data for front-end only display
    return Promise.resolve({ data: mockProductsData });
};

export const createProduct = (product) => {
    // return api.post('/api/products', product);
    // Simulate creating a product
    return Promise.resolve({ data: product });
};

export const updateProduct = (id, formData) => {
    // return axios.put(`${baseURL}/api/products/edit/${id}`, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // });
    // Simulate updating a product
    return Promise.resolve({ data: { ...formData, id } });
};

export const deleteProduct = (id) => {
    // return api.delete(`/api/products/${id}`);
    // Simulate deleting a product
    return Promise.resolve({ data: id });
};

