import React from 'react';
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

const ProductCard = (props) => {
    const { addToCart } = useCart();
    const [, setLocation] = useLocation();
    const { showMessage } = useFlashMessage();

    const handleAddToCart = () => {
        addToCart(props);
        showMessage('Item added to cart', 'success');
        setLocation('/cart');
    }

    return (
        <>
            <section id="products" className="py-5">
                <div className="container d-flex">
                    <div className="row justify-content-center">
                        {/* Product Card */}
                        <div className="col-md-10 mb-4">
                            <div className="card product-card">
                                <img
                                    src={props.imageUrl}
                                    className="card-img-top"
                                    alt={props.productName}
                                />
                                <div className="card-body text-center">
                                    <h5 className="product-title">{props.productName}</h5>
                                    <p className="card-text">{props.price}</p>
                                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        {/*!-- More product cards can go here following the same structure --*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCard;