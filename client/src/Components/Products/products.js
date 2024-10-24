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
            if (!response.ok) throw new Error("Failed to fetch products");
            const data = await response.json();
            console.log('Fetched Products:', data);
            setProducts(data); // Use the product data from the backend // Make sure this sets the correct state
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    if (!products.length) {
        return <p>No products available</p>;
    }
    
    return (
            <div className="products-gallery">
            {products && products.length > 0 ? (
            products.map((product, index) => (
                <div className={`product-card img img-${index + 1}`} key={index}>
                    <div className="product-card-inner">
                        {/* Display the image using the URL from the backend */}
                        {/* Front of the card displaying the image */}
                        <div
                            className="product-card-front"
                            style={{
                                backgroundImage: product.imageUrl.startsWith('http')
                                  ? `url(${product.imageUrl})` // Use external URL if available
                                  : `url(${process.env.PUBLIC_URL}/ProductGallery/${product.imageUrl})`, // Use local path for images inside public/ProductGallery
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
            ))
            ) : (
            <p>No products avalable</p>
            )}
        </div>
    );
};

export default Gallery;