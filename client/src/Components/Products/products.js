import React, { useEffect, useState } from 'react';
import './products.css';

// Dynamically import all images from the Gallery folder
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./Gallery', false, /\.(png|jpe?g|svg)$/));


const Gallery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
         // Simulate fetching products with local images
            const fetchedProducts = images.map((image, index) => ({
            id: index,
            name: `Product ${index + 1}`,
            price: (index + 1) * 10,
            description: `Description for Product ${index + 1}`,
            imageUrl: image,
        }));
        setProducts(fetchedProducts);
        // fetchProducts();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                import('./products-gallery-mobile.css').then(() => {
                    
                });
            }
        };
        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //this is the fetchProducts function that would be used if we were fetching from the API
    // const fetchProducts = async () => {
    //     try {
    //         const apiUrl = `${process.env.REACT_APP_API_URL}/api/products`;
    //         const response = await fetch(apiUrl);
    //         const data = await response.json();
    //         setProducts(data);
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // };

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
                            backgroundImage: `url(${product.imageUrl})`,
                            //this is how the images will be displayed if we were fetching from the API
                            // backgroundImage: product.imageUrl
                            //     ? `url(${process.env.REACT_APP_API_URL}${product.imageUrl})`
                            //     : 'url(/path/to/placeholder/image.jpg)',
                        }}
                        
                    ></div>
                    {/* Back of the card displaying product information */}
                    <div className="product-card-back">
                        <h3>{product.name}</h3>
                        <p className="price">${product.price}</p>
                        <p className="description">{product.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Gallery;