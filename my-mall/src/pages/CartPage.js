import React, { useState, useEffect } from 'react';
import { List, Button, InputNumber, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (id, value) => {
    const updatedItems = cartItems.map(item => item.id === id ? { ...item, quantity: value } : item);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    message.success('商品已从购物车移除');
  };

  const handleSelect = (id) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(itemId => itemId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    setSelectedItems([]);
    localStorage.removeItem('cartItems');
    message.success('购物车已清空');
  };

  const redirectToPayment = () => {
    if (selectedItems.length === 0) {
      message.error('请选择要结算的商品');
      return;
    }
    const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.id));
    navigate('/order/2', { state: { selectedCartItems, type: '2' } });
  };

  const totalAmount = cartItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>购物车</h2>
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
            <Checkbox 
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
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
      <Button type="default" onClick={handleClearCart}>清空购物车</Button>
    </div>
  );
};

export default CartPage;
