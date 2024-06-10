import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/OrderPage.css';

const OrderPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    // 获取购物车数据
    let carItems = [];
    console.log("type", type);
    if (type === "1") {
        carItems = JSON.parse(localStorage.getItem('singleCartItems'));
    } else if (type === "2") {
        carItems = JSON.parse(localStorage.getItem('cartItems'));
    }

    const getSumPayment = () => {
        let sum = 0;
        for (let i = 0; i < carItems.length; i++) {
            sum += carItems[i].price * carItems[i].quantity;
        }
        console.log("sum", sum);
        return sum;
    }

    // 用于生成订单序列
    const getOrderNumber = () => {
        return new Date().getTime() + Math.random().toString(36).substr(2, 6);
    }
    // 支付方法
    const handleConfirm = () => {
        const orderList = JSON.parse(localStorage.getItem('orders')) || [];
        // 创建未支付订单
        orderList.push({
            key: orderList.length + 1,
            number: carItems.length,
            orderAmount: carItems.reduce((total, item) => total + item.price * item.quantity, 0),
              orderNumber: getOrderNumber(),
            orderSource: 'APP订单',
            orderStatus: '未发货',
            payStatus: "未支付",
            paymentMethod: "",
            submitTime: new Date().toLocaleString(),
            userAccount: 'test',
            carItem: carItems
        });
        localStorage.setItem('orders', JSON.stringify(orderList));
        console.log("orderList", orderList);
        console.log("type", type);
       
        navigate(`/pay-confirm/${type}`);
    }

    return (
        <div className="order-page">
            <h2 className="page-title">请确认订单</h2>
            <div className="order-details">
                <ul>
                    <li>付款人: test</li>
                    <li>付款金额: {getSumPayment()}</li>
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
                                <li>颜色: {item.specs.颜色}</li>
                                <li>存储容量: {item.specs.存储容量}</li>
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
