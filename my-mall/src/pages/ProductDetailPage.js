import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Descriptions, Divider, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import '../css/ProductDetailPage.css';

const products = {
  1: { 
    name: '小米12 Pro', 
    description: '天玑9000+处理器 5000万像素影像 2K超视感屏 120Hz屏幕 67W快充', 
    price: 2999, 
    oldPrice: 3299,
    img: require('../img/brand1.png'),
    specs: {
      颜色: '黑色',
      存储容量: '128G',
      电池容量: '5160mAh',
      屏幕尺寸: '6.67英寸'
    }
  },
  2: { 
    name: 'Redmi K50', 
    description: '天玑8100 2K直屏 5500mAh电池 67W快充', 
    price: 2099, 
    oldPrice: 2299,
    img: require('../img/brand2.png'),
    specs: {
      颜色: '蓝色',
      存储容量: '128G',
      电池容量: '5500mAh',
      屏幕尺寸: '6.67英寸'
    }
  }
  // 添加更多商品信息...
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products[productId];
  const navigate = useNavigate();

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, id: productId, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    message.success('商品已成功添加到购物车');
  };

  if (!product) {
    return <div>商品未找到</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeftOutlined />
      </div>
      <img src={product.img} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="product-price">
        <span className="new-price">¥{product.price}</span>
        <span className="old-price">¥{product.oldPrice}</span>
      </p>
      <Divider />
      <Descriptions title="商品规格" bordered>
        {Object.entries(product.specs).map(([key, value]) => (
          <Descriptions.Item label={key} key={key}>{value}</Descriptions.Item>
        ))}
      </Descriptions>
      <Divider />
      <div className="action-buttons">
        <Button type="primary" className="buy-button">立即购买</Button>
        <Button type="default" className="add-to-cart-button" onClick={addToCart}>加入购物车</Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
