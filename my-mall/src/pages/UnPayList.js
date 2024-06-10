import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/OrderListPage.css';

const UnPayListPage = () => {
    const navigate = useNavigate();

    // 获取订单数据
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // 过滤未支付订单
    const unPayOrders = orders.filter(order => order.payStatus === '未支付');

    const handleViewOrder = (orderNumber) => {
        navigate(`/unpayorder-view/${orderNumber}`);
    };

    if (unPayOrders.length === 0) {
        return (
            <div className="orderList-page">
                <h2 className="page-title">暂无未支付订单</h2>
                <button onClick={() => navigate('/')} className="back-home">返回首页</button>
            </div>
        );
    } else {
        return (
            <div className="orderList-page">
                <h2 className="page-title">未支付订单列表</h2>
                <ul className="order-list">
                    {unPayOrders.map(order => (
                        <li
                            key={order.key}
                            className="order-item"
                            onClick={() => handleViewOrder(order.orderNumber)}
                        >
                            <p>订单编号：{order.orderNumber}</p>
                            <p>订单金额：¥{order.orderAmount}</p>
                            <p>提交时间：{order.submitTime}</p>
                            <p>订单状态：{order.orderStatus}</p>
                            <p>支付状态：{order.payStatus}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate('/my')} className="back-home">返回我的主页</button>
            </div>
        );
    }
};

export default UnPayListPage;
