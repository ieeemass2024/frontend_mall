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
    img: require('../img/brand2.png'),
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
  },
  3: { 
    name: 'IPhone 15 Pro Max', 
    description: 'A16仿生芯片 三摄像头 120Hz ProMotion屏幕', 
    price: 9999, 
    oldPrice: 10999,
    img: require('../img/brand3.png'),
    specs: {
      颜色: '金色',
      存储容量: '256G',
      电池容量: '4352mAh',
      屏幕尺寸: '6.7英寸'
    }
  },
  4: { 
    name: 'HUAWEI Mate 60', 
    description: '麒麟9000芯片 三摄像头 66W快充 无线充电', 
    price: 9999, 
    oldPrice: 10999,
    img: require('../img/brand1.png'),
    specs: {
      颜色: '白色',
      存储容量: '256G',
      电池容量: '4500mAh',
      屏幕尺寸: '6.8英寸'
    }
  },
  5:{
    name: 'NIKE T恤',
    description: '男士短袖T恤 透气舒适',
    price: 299,
    oldPrice: 399,
    img: require('../img/brand5.png'),
    specs: {
      颜色: '黑色',
      尺码: 'M',
      材质: '纯棉'
    }
  },
  6:{
    name: '中国李宁 短裤',
    description: '男士运动短裤 速干透气',
    price: 399,
    oldPrice: 499,
    img: require('../img/brand6.png'),
    specs: {
      颜色: '灰色',
      尺码: 'L',
      材质: '涤纶'
    }
  },
  7:{
    name: 'TLC 55寸液晶电视',
    description: '4K超高清 人工智能语音 无边框设计',
    price: 2999,
    oldPrice: 3499,
    img: require('../img/brand7.png'),
    specs: {
      尺寸: '55英寸',
      分辨率: '4K',
      操作系统: 'Android'
    }
  },
  8:{
    name: '小米 65寸电视',
    description: '4K超高清 人工智能语音 无边框设计',
    price: 3999,
    oldPrice: 4499,
    img: require('../img/brand2.png'),
    specs: {
      尺寸: '65英寸',
      分辨率: '4K',
      操作系统: 'PatchWall'
    }
  },
  9:{
    name: '海信 50寸电视',
    description: '4K超高清 人工智能语音 无边框设计',
    price: 1999,
    oldPrice: 2499,
    img: require('../img/brand8.png'),
    specs: {
      尺寸: '50英寸',
      分辨率: '4K',
      操作系统: 'VIDAA'
    }
  },
  10:{
    name: '海澜之家 短袖衬衫',
    description: '男士短袖衬衫 透气舒适',
    price: 199,
    oldPrice: 299,
    img: require('../img/brand10.png'),
    specs: {
      颜色: '白色',
      尺码: 'M',
      材质: '涤纶'
    }
  }
  
  
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
