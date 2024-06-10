import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/PaySuccessPage.css';

const PaySuccessPage = () => {
    const navigate = useNavigate();

    const handleBackToCart = () => {
        navigate('/cart');
    }

    return (
        <div className="payment-success-page">
            <div className="success-container">
                <div className="success-message">
                    <h2>支付成功</h2>
                    <div className="checkmark">
                        <svg className="checkmark_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark_circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </div>
                <button onClick={handleBackToCart} className="back-to-cart-button">返回购物车</button>
            </div>
        </div>
    );
};

export default PaySuccessPage;
