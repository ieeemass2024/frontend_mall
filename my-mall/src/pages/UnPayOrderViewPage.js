import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/OrderPage.css';

const UnPayOrderViewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState(null);

    useEffect(() => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const foundOrder = orders.find(order => order.orderNumber === id);
        setOrder(foundOrder);
    }, [id]);

    if (!order) {
        return <div>加载中...</div>;
    }

    // 将当前订单存储到localStorage
    localStorage.setItem('currentOrder', JSON.stringify(order));
    return (
        <div className="order-page">
            <div className="order-details">
                <h1>订单信息</h1>
                <ul>
                    <li>付款人: {order.userAccount}</li>
                    <li>付款金额: ¥{order.orderAmount}</li>
                    <li>付款时间: {order.submitTime}</li>
                    <li>收货地址: 北京交通大学16号宿舍楼</li>
                </ul>
            </div>
            <div className="cart-items">
                {order.carItem.map((item) => (
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
            <button onClick={() => navigate('/pay-confirm/1')} className="back-order-list">支付订单</button>
            <button onClick={() => navigate('/order-unpaylist')} className="back-order-list">返回订单列表</button>
        </div>
    );
};

export default UnPayOrderViewPage;
