import React, { useEffect, useState } from 'react';
import './products.css';

const Gallery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // console.log("Fetching products from:", `${process.env.REACT_APP_API_URL}/api/products`);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
            if (!response.ok) throw new Error("Failed to fetch products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    if (!products.length) {
        return <p>No products available</p>;
    }

    
    return (
        <div className="products-gallery">
        {products.map((product, index) => (
            <div className={`product-card img img-${index + 1}`} key={index}>
                <div className="product-card-inner">
                    {/* Front of the card displaying the image */}
                    <div
                        className="product-card-front"
                        style={{
                            backgroundImage: product.imageUrl
                            ? `url(${process.env.REACT_APP_API_URL}${product.imageUrl})`
                            : 'url(/path/to/placeholder/image.jpg)',
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