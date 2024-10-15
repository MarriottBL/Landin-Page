import axios from 'axios';


    const api = axios.create (
        {
            baseURL: 'http://localhost:8000/api/products'
        }
    )

    export const getProducts = () => api.get ('/')
    export const createProduct = (product) => api.post ('/add', product)
    export const updateProduct = (id, product) => api.put (`/${id}`, product)
    export const deleteProduct = (id) => api.delete (`/${id}`)

