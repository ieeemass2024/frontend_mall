import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { UserOutlined, EnvironmentOutlined, ClockCircleOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import '../css/MyPage.css';

const MyPage = () => {
  return (
    <div className="my-page">
      <div className="header">
        <div className="profile">
          <Avatar size={64} src={require('../img/profile.png')} />
          <div className="nickname">member</div>
          <div className="membership">黄金会员</div>
        </div>
      </div>
      <div className="section">
        <Row gutter={[16, 16]} className="points">
          <Col span={8}><div className="points-item">5000积分</div></Col>
          <Col span={8}><div className="points-item">1000成长值</div></Col>
          <Col span={8}><div className="points-item">暂无优惠券</div></Col>
        </Row>
      </div>
      <div className="section">
        <Row gutter={[16, 16]} className="menu">
          <Col span={6}><div className="menu-item"><UserOutlined /><span>全部订单</span></div></Col>
          <Col span={6}><div className="menu-item"><ClockCircleOutlined /><span>待付款</span></div></Col>
          <Col span={6}><div className="menu-item"><HeartOutlined /><span>待收货</span></div></Col>
          <Col span={6}><div className="menu-item"><StarOutlined /><span>退换/售后</span></div></Col>
        </Row>
      </div>
      <div className="section">
        <Row gutter={[16, 16]} className="settings">
          <Col span={24}><div className="settings-item"><EnvironmentOutlined /><span>地址管理</span></div></Col>
          <Col span={24}><div className="settings-item"><ClockCircleOutlined /><span>我的足迹</span></div></Col>
          <Col span={24}><div className="settings-item"><HeartOutlined /><span>我的关注</span></div></Col>
          <Col span={24}><div className="settings-item"><StarOutlined /><span>我的收藏</span></div></Col>
          <Col span={24}><div className="settings-item"><UserOutlined /><span>我的评价</span></div></Col>
        </Row>
      </div>
    </div>
  );
};

export default MyPage;
