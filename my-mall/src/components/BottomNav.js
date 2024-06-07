import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import '../css/BottomNav.css'; // 自定义样式文件

function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/">
        <HomeOutlined />
        <span>首页</span>
      </Link>
      <Link to="/category">
        <AppstoreOutlined />
        <span>分类</span>
      </Link>
      <Link to="/cart">
        <ShoppingCartOutlined />
        <span>购物车</span>
      </Link>
      <Link to="/my">
        <UserOutlined />
        <span>我的</span>
      </Link>
    </div>
  );
}

export default BottomNav;
