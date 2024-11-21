import "./styles.css";
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import ShoppingCart from './ShoppingCart';
import { Route, Switch } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';


function App() {
    const { getMessage, clearMessage } = useFlashMessage();
    const flashMessage = getMessage();

    useEffect(() => {

        const timer = setTimeout(() => {
            clearMessage();
        }
            , 3000);
        return () => {
            clearTimeout(timer);
        };
    }
        , [flashMessage]);

    return (
        <>
            <Navbar />
            <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
                {flashMessage.message}
            </div>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/cart" component={ShoppingCart} />

            </Switch>

            <footer className="footer text-center">
                <div className="container">
                    <p>&copy; 2024 Sweet Delights. All Rights Reserved.</p>
                    <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
                </div>
            </footer>
        </>
    );
}

export default App;