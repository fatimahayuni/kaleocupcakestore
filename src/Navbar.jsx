import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

function Navbar() {
    const [isNavBarShowing, setNavBarShowing] = useState(false);
    // returns the current URL
    const [location] = useLocation();

    // Toggle the collapse state
    const toggleNavbar = () => {
        setNavBarShowing(!isNavBarShowing);
    };

    // Sync the collapse state with screen size
    useEffect(() => {
        // first parameter
        const syncNavbarState = () => {
            setNavBarShowing(window.innerWidth >= 992); // Show if larger than 992px, otherwise don't show.
        };
        syncNavbarState(); // Run on mount to set the initial state

        // Listen for window resize events
        window.addEventListener('resize', syncNavbarState);

        // Cleanup the listener on unmount
        return () => window.removeEventListener('resize', syncNavbarState);
    }, []); // the empty array is the second parameter



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/" className="navbar-brand">Khalil's Cupcake Store</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavBarShowing ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li
                            className="nav-item">
                            <Link href="/products" className={`nav-link ${location === '/products' ? 'active' : ''}`}>Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/register" className={`nav-link ${location === '/register' ? 'active' : ''}`}>Register
                            </Link>
                        </li>

                        <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>

                        <li className="nav-item">
                            <Link href="/cart" className={`nav-link ${location === '/cart' ? 'active' : ''}`}>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
