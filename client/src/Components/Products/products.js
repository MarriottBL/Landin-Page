import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Api/productsApi'; // Fetch products from backend
import './products.css';

const Gallery = () => {
    const [products, setProducts] = useState([]);

    // const products = [
    //     { id: 1, image: require("./ProductGallery/chess-cake-cup.jpg"), name: 'Product 1', price: '$10' },
    //     { id: 2, image: require("./ProductGallery/puerto-rico-mix.jpg"), name: 'Product 2', price: '$15' },
    //     { id: 3, image: require("./ProductGallery/cake-mix.jpg"), name: 'Product 3', price: '$20' },
    //     { id: 4, image: require("./ProductGallery/cup-cake.jpg"), name: 'Product 4', price: '$25' },
    //     { id: 5, image: require("./ProductGallery/strawberry-mix.jpg"), name: 'Product 5', price: '$30' },
    //     { id: 6, image: require("./ProductGallery/chocolate-bomb.jpg"), name: 'Product 6', price: '$35' },
    //     { id: 7, image: require("./ProductGallery/trait-mix.jpg"), name: 'Product 7', price: '$40' }
    // ];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data); // Use the product data from the backend
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
                            backgroundImage: product.imageUrl.startsWith('http')
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