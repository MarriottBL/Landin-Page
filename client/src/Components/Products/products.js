import React, { useEffect, useState } from 'react';
// import { getProducts } from '../../Api/productsApi'; // Fetch products from backend
import './products.css';

const Gallery = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
            
            // Check if the response status is OK
            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            setProducts(data); // Use the product data from the backend
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    if (products === null){
        return <div className="products-gallery"></div>
    }

    return (
        <div className="products-gallery">
        {products.map((product, index) => (
            <div className={`product-card img img-${index + 1}`} key={index}>
                <div className="product-card-inner">
                    {/* Display the image using the URL from the backend */}
                     {/* Front of the card displaying the image */}
                    <div
                        className="product-card-front"
                        style={{
                            backgroundImage: product.imageUrl.startsWith('http, https')
                                ? `url(${product.imageUrl})` // Use external URL if available
                                : `url(${process.env.PUBLIC_URL}/ProductGallery/${product.imageUrl})` // Use local path otherwise
                        }}
                    ></div>

                    {/* Back of the card displaying product information */}
                    <div className="product-card-back">
                        <h3>{product.name}</h3>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
};

export default Gallery;