import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/PayConfirmPage.css';

const PayConfirmPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
    }, []);

    // 获取购物车数据
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder')) || [];

    console.log(currentOrder);


    // 支付方法
    const handlePay = () => {
        if (!paymentMethod) {
            alert('请选择支付方式');
            return;
        }

        // 获取订单列表
        const orderList = JSON.parse(localStorage.getItem('orders')) || [];
        // 模拟支付成功
        setTimeout(() => {
            // 更新订单状态
            currentOrder.payStatus = '已支付';
            currentOrder.paymentMethod = paymentMethod;
            // 更新订单列表
            orderList[currentOrder.key - 1] = currentOrder;
            
            // orderList.push({
            //     key: orderList.length + 1,
            //     number: carItems.length,
            //     orderAmount: carItems.reduce((total, item) => total + item.price * item.quantity, 0),
            //     orderNumber: getOrderNumber(),
            //     orderSource: 'APP订单',
            //     orderStatus: '未发货',
            //     payStatus: "已支付",
            //     paymentMethod: paymentMethod,
            //     submitTime: new Date().toLocaleString(),
            //     userAccount: 'test',
            //     carItem: carItems
            // });
            localStorage.setItem('orders', JSON.stringify(orderList));

            // 清空当前订单信息
            localStorage.removeItem('`currentOrder`');
            // 跳转到支付成功页面
            navigate('/pay-success');
        }, 500);
    }

    return (
        <div className="payment-page">
            <h2 className="page-title">确认付款</h2>
            <p className="payment-instruction">请确认支付以下订单：</p>
            <div className="payment-summary">
                <p>订单金额总计：<span className="payment-amount">¥{currentOrder.orderAmount}</span></p>
                <p>付款人：{currentUser ? currentUser.username : 'test'}</p>
            </div>
            <div className="payment-method">
                <label>
                    <input
                        type="radio"
                        value="支付宝"
                        checked={paymentMethod === '支付宝'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    支付宝
                </label>
                <label>
                    <input
                        type="radio"
                        value="微信支付"
                        checked={paymentMethod === '微信支付'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    微信支付
                </label>
            </div>
            <button onClick={handlePay} className="confirm-payment-button">支付订单</button>
        </div>
    );
};

export default PayConfirmPage;
