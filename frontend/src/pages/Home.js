import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the CSS for react-toastify
import './Home.css'; // Import the CSS file for styling

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="home-container">
            <div className="header">
                <h1>Welcome, {loggedInUser}</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div>
                <h2>Products Detail </h2>
            </div>
            <div className="products-container">
                {products && products.length > 0 ? (
                    products.map((item, index) => (
                        <div className="product-card" key={index}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
