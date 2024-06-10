import React, { useState, useEffect } from 'react';
import { List, Button, InputNumber, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id, value) => {
    const updatedItems = cartItems.map(item => item.id === id ? { ...item, quantity: value } : item);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    message.success('商品已从购物车移除');
  };

    const redirectToPayment = () => {
        if(cartItems.length === 0) {
            message.error('购物车为空');
            return;
        }
        navigate('/payment/2');
    }

  return (
    <div className="cart-page">
      <p>购物车</p>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item
            actions={[
              <InputNumber
                min={1}
                defaultValue={item.quantity}
                onChange={value => handleQuantityChange(item.id, value)}
              />,
              <Button type="link" onClick={() => handleRemove(item.id)}>删除</Button>
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`¥${item.price}`}
            />
          </List.Item>
        )}
      />

      <div className="checkout">
        <span>总计: ¥{totalAmount}</span>
        <Button type="primary" onClick={redirectToPayment}>去结算</Button>
      </div>
    </div>
  );
};

export default CartPage;
