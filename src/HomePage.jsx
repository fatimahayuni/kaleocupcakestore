import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from './ProductCard';

function HomePage() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get('/featured.json');
                setFeaturedProducts(response.data);
            } catch (error) {
                console.log("Error fetching featured products:", error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    const renderfeaturedProducts = () => {
        const productElements = [];
        for (const product of featuredProducts) {
            productElements.push(
                <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard
                        id={product.id}
                        imageUrl={product.image}
                        productName={product.name}
                        price={product.price.toFixed(2)}
                    />
                </div>
            );
        }
        return productElements;
    }

    return (
        <>
            <header className="hero-section text-white text-center">
                <div className="container">
                    <h1>Delicious Cupcakes for Every Occasion</h1>
                    <p>Handcrafted, fresh, and delivered right to your door.</p>
                    <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
                </div>
            </header>

            <main className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>


                {/* Product Cards Here */}
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <ProductCard
                            imageUrl="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg"
                            productName="Chocolate Cupcake"
                            price="3.50"
                        />
                    </div>

                    <div className="col-md-4 mb-4">
                        <ProductCard
                            imageUrl="https://sallysbakingaddiction.com/wp-content/uploads/2014/04/Blueberries-n-Cream-Cupcakes-by-sallysbakingaddiction.com_.jpg"
                            productName="Blueberries Cupcake"
                            price="3.50"
                        />
                    </div>

                    <div className="col-md-4 mb-4">
                        <ProductCard
                            imageUrl="https://sallysbakingaddiction.com/wp-content/uploads/2013/04/the-best-lemon-cupcakes-2.jpg"
                            productName="Lemon Cupcake"
                            price="3.50"
                        />
                    </div>
                </div>

            </main>
        </>
    )

}

export default HomePage;