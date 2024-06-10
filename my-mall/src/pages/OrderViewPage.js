import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/OrderPage.css';

const OrderViewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 获取购物车数据
    let carItems = [];

    return (
        <div className="order-page">
            <div className="order-details">
                <ul>
                    <li>付款人: test</li>
                    <li>付款金额: {}</li>
                    <li>付款时间: {}</li>
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
        </div>
    );
};

export default OrderViewPage;
