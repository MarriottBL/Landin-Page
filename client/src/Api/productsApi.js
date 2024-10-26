import axios from 'axios';


    const api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000'
        });

    export const getProducts = () => api.get ('/products')
    export const createProduct = (product) => api.post ('/add', product)
    export const updateProduct = (id, product) => api.put (`/${id}`, product)
    export const deleteProduct = (id) => api.delete (`/${id}`)

