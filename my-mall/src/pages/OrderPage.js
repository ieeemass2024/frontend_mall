import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import '../css/OrderPage.css';

const OrderPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCartItems } = location.state || {};

    const [carItems, setCarItems] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);

        if (type === "1") {
            setCarItems(JSON.parse(localStorage.getItem('singleCartItems')) || []);
        } else if (type === "2") {
            setCarItems(selectedCartItems || []);
        }
    }, [type, selectedCartItems]);

    const getSumPayment = () => {
        return carItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    const getOrderNumber = () => {
        return new Date().getTime() + Math.random().toString(36).substr(2, 6);
    }

    const handleConfirm = () => {
        const orderList = JSON.parse(localStorage.getItem('orders')) || [];
        orderList.push({
            key: orderList.length + 1,
            number: carItems.length,
            orderAmount: getSumPayment(),
            orderNumber: getOrderNumber(),
            orderSource: 'APP订单',
            orderStatus: '未发货',
            payStatus: "未支付",
            paymentMethod: "",
            submitTime: new Date().toLocaleString(),
            userAccount: currentUser ? currentUser.username : 'test',
            carItem: carItems
        });
        localStorage.setItem('orders', JSON.stringify(orderList));

        if (type === "1") {
            localStorage.removeItem('singleCartItems');
        } else if (type === "2") {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const remainingItems = cartItems.filter(cartItem => !selectedCartItems.find(selectedItem => selectedItem.id === cartItem.id));
            localStorage.setItem('cartItems', JSON.stringify(remainingItems));
        }

        localStorage.setItem('currentOrder', JSON.stringify(orderList[orderList.length - 1]));
        navigate(`/pay-confirm/${type}`);
    } 

    return (
        <div className="order-page">
            <h2 className="page-title">请确认订单</h2>
            <div className="order-details">
                <ul>
                    <li>付款人: {currentUser ? currentUser.username : 'member'}</li>
                    <li>付款金额: ¥{getSumPayment()}</li>
                    <li>收货地址: 北京交通大学16号宿舍楼</li>
                </ul>
            </div>
            <div className="cart-items">
                {carItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <ul>
                                <li>数量: {item.quantity}</li>
                                <li>价格: ¥{item.price}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-box">
                <button onClick={handleConfirm} className="payment-button">提交订单</button>
            </div>
        </div>
    );
};

export default OrderPage;
