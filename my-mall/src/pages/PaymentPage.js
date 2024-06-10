import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/PaymentPage.css';

const PaymentPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    // 获取购物车数据
    let carItems = [];
    if (type === "1") {
        carItems = JSON.parse(localStorage.getItem('singleCartItems'));
    } else if (type === "2") {
        carItems = JSON.parse(localStorage.getItem('cartItems'));
    }

    console.log(carItems);

    // 用于生成订单序列
    const orderNumber = () => {
        return new Date().getTime() + Math.random().toString(36).substr(2, 6);
    }

    const getSumPayment = () => {
        let sum = 0;
        for (let i = 0; i < carItems.length; i++) {
            sum += carItems[i].price * carItems[i].quantity;
        }
        return sum;
    }

    // 支付方法
    const handlePay = () => {
        // 获取订单列表
        const orderList = JSON.parse(localStorage.getItem('orderList')) || [];
        // 模拟支付成功
        setTimeout(() => {
            // 将订单信息存储到localStorage
            orderList.push({
                key: orderList.length + 1,
                number: carItems.length,
                orderAmount: carItems.reduce((total, item) => total + item.price * item.quantity, 0),
                orderNumber: orderNumber(),
                orderSource: 'APP订单',
                orderStatus: '已关闭',
                paymentMethod: '未支付',
                submitTime: new Date().toLocaleString(),
                userAccount: 'test',
                carItem: carItems
            });
            localStorage.setItem('orderList', JSON.stringify(orderList));

            // 清空购物车
            if (type === 1) {
                localStorage.removeItem('singleCartItems');
            } else if (type === 2) {
                localStorage.removeItem('cartItems');
            }
            // 跳转到支付成功页面
            navigate('/pay-success');
        }, 2000);
    }

    return (
        <div className="payment-page">
            <h2 className="page-title">请确认订单</h2>
            <div className="order-details">
                <ul>
                    <li>付款人: test</li>
                    <li>付款金额: {getSumPayment()}</li>
                    <li>付款时间: {new Date().toLocaleString()}</li>
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
            <button onClick={handlePay} className="confirm-payment-button">确认支付</button>
        </div>
    );
};

export default PaymentPage;
