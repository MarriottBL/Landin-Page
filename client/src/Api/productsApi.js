import axios from 'axios';


    const api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
        });

        export const getProducts = async () => {
            try {
                const response = await api.get('/');
                console.log('Products Response:', response); // Log full response object
                if (response.headers['content-type'] === 'application/json') {
                    console.log('Products JSON:', response.data); // Log data if JSON
                    return response.data;
                } else {
                    console.log('Received HTML or other:', response); // Log in case of HTML or non-JSON data
                }
            } catch (error) {
                console.error('Error fetching products:', error); // Log any errors
            }
        };
    export const createProduct = (product) => api.post ('/add', product)
    export const updateProduct = (id, product) => api.put (`/${id}`, product)
    export const deleteProduct = (id) => api.delete (`/${id}`)

