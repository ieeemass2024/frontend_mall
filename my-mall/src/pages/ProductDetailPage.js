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
    img: require('../img/product1.png'),
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
    img: require('../img/product2.png'),
    specs: {
      颜色: '蓝色',
      存储容量: '128G',
      电池容量: '5500mAh',
      屏幕尺寸: '6.67英寸'
    }
  },
  3: {
    name: 'IPhone 15pm',
    description: 'A16处理器 5000万像素影像 2K超视感屏 120Hz屏幕 67W快充',
    price: 9999,
    oldPrice: 10999,
    img: require('../img/product4.png'),
    specs: {
      颜色: '黑色',
      存储容量: '128G',
      电池容量: '5160mAh',
      屏幕尺寸: '6.67英寸'
    }
  },
  4: {
    name: '三星S24 Ultra',
    description: '骁龙888处理器 5000万像素影像 2K超视感屏 120Hz屏幕 67W快充',
    price: 3999,
    oldPrice: 4299,
    img: require('../img/product3.png'),
    specs: {
      颜色: '白色',
      存储容量: '128G',
      电池容量: '5160mAh',
      屏幕尺寸: '6.67英寸'
    }
  },
    5: {
        name: 'NIKE T恤',
        description: '男款短袖T恤',
        price: 299,
        oldPrice: 399,
        img: require('../img/product5.png'),
        specs: {
            颜色: '黑色',
            尺码: 'M，L，XL'
        }
    },
    6: {
        name: '中国李宁 短裤',
        description: '男款运动短裤',
        price: 399,
        oldPrice: 499,
        img: require('../img/product6.png'),
        specs: {
            颜色: '黑色',
            尺码: 'M，L，XL'
        }
    },
    7: {
        name: 'TLC',
        description: '55英寸4K超高清智能电视',
        price: 2999,
        oldPrice: 3999,
        img: require('../img/product7.png'),
        specs: {
            尺寸: '55英寸',
            分辨率: '4K',
            系统: 'Android'
        }
    },
    8: {
        name: '小米',
        description: '55英寸4K超高清智能电视',
        price: 3999,
        oldPrice: 4999,
        img: require('../img/product8.png'),
        specs: {
            尺寸: '55英寸',
            分辨率: '4K',
            系统: 'MIUI'
        }
    },
    9: {
        name: '海信',
        description: '55英寸4K超高清智能电视',
        price: 1999,
        oldPrice: 2999,
        img: require('../img/product8.png'),
        specs: {
            尺寸: '55英寸',
            分辨率: '4K',
            系统: 'VIDAA'
        }
    },
    10: {
        name: '海澜之家',
        description: '男款短袖T恤',
        price: 199,
        oldPrice: 299,
        img: require('../img/product10.png'),
        specs: {
            颜色: '白色',
            尺码: 'M，L，XL'
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

  const redirectToPayment = () => {
    addToCart();
    navigate('/payment');
  }

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
        <Button type="primary" className="buy-button" onClick={redirectToPayment}>立即购买</Button>
        <Button type="default" className="add-to-cart-button" onClick={addToCart}>加入购物车</Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
