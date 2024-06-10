import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/PayConfirmPage.css';

const PayConfirmPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    // 获取购物车数据
    let carItems = [];
    if (type === "1") {
        carItems = JSON.parse(localStorage.getItem('singleCartItems'));
    } else if (type === "2") {
        carItems = JSON.parse(localStorage.getItem('cartItems'));
    }

    // 用于生成订单序列
    const getOrderNumber = () => {
        return new Date().getTime() + Math.random().toString(36).substr(2, 6);
    }

    const orderNum = getOrderNumber();

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
        const orderList = JSON.parse(localStorage.getItem('orders')) || [];
        // 模拟支付成功
        setTimeout(() => {
            // 将订单信息存储到localStorage
            orderList.push({
                key: orderList.length + 1,
                number: carItems.length,
                orderAmount: carItems.reduce((total, item) => total + item.price * item.quantity, 0),
                orderNumber: orderNum,
                orderSource: 'APP订单',
                orderStatus: '已关闭',
                paymentMethod: '未支付',
                submitTime: new Date().toLocaleString(),
                userAccount: 'test',
                carItem: carItems
            });
            localStorage.setItem('orders', JSON.stringify(orderList));

            // 清空购物车
            if (type === "1") {
                localStorage.removeItem('singleCartItems');
            } else if (type === "2") {
                localStorage.removeItem('cartItems');
            }
            // 跳转到支付成功页面
            navigate('/pay-success');
        }, 500);
    }

    return (
        <div className="payment-page">
            <h2 className="page-title">确认付款</h2>
            <p className="payment-instruction">请确认支付以下订单：</p>
            <div className="payment-summary">
                <p>订单金额总计：<span className="payment-amount">¥{getSumPayment()}</span></p>
                <p>订单编号：{orderNum}</p>
                <p>付款人：test</p>
            </div>
            <button onClick={handlePay} className="confirm-payment-button">支付订单</button>
        </div>
    );
};

export default PayConfirmPage;