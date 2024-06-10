import React from 'react';
import { Input, Carousel, Row, Col, Card } from 'antd';
import { SearchOutlined, AppstoreOutlined, GiftOutlined, DollarOutlined, PercentageOutlined } from '@ant-design/icons';
import '../css/HomePage.css';

const { Search } = Input;

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="search-bar">
        <Search
          placeholder="请输入商品名 如: 手机"
          enterButton={<SearchOutlined />}
          size="large"
        />
      </div>
      <Carousel autoplay className="carousel">
        <div><img src={require('../img/image.png')} alt="carousel" /></div>
        <div><img src={require('../img/image1.png')} alt="carousel" /></div>
        <div><img src={require('../img/image2.png')} alt="carousel" /></div>
      </Carousel>
      <Row gutter={[8, 8]} className="icons">
        <Col span={6}>
          <Card className="icon-card">
            <AppstoreOutlined className="icon" />
            <div>专题</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="icon-card">
            <GiftOutlined className="icon" />
            <div>活动</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="icon-card">
            <DollarOutlined className="icon" />
            <div>优惠</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="icon-card">
            <PercentageOutlined className="icon" />
            <div>特惠</div>
          </Card>
        </Col>
      </Row>
      <div className="brands">
        <h2>品牌制造商直供</h2>
        <div className="brand-list-container">
          <div className="brand-list">
            <Card><img src={require('../img/brand1.png')} alt="华为" /><div>华为</div></Card>
            <Card><img src={require('../img/brand2.png')} alt="小米" /><div>小米</div></Card>
            <Card><img src={require('../img/brand3.png')} alt="苹果" /><div>苹果</div></Card>
            <Card><img src={require('../img/brand4.png')} alt="三星" /><div>三星</div></Card>
            <Card><img src={require('../img/brand5.png')} alt="NIKE" /><div>NIKE</div></Card>
            <Card><img src={require('../img/brand6.png')} alt="李宁" /><div>李宁</div></Card>
            <Card><img src={require('../img/brand7.png')} alt="TLC" /><div>TLC</div></Card>
            <Card><img src={require('../img/brand8.png')} alt="海信" /><div>海信</div></Card>
            <Card><img src={require('../img/brand10.png')} alt="海澜之家" /><div>海澜之家</div></Card>
          </div>
        </div>
      </div>
      <div className="hot-products">
        <h2>热门商品</h2>
        <Row gutter={[8, 8]} className="product-list">
          <Col span={12}><Card onClick={() => window.location.href='/product/1'}><img src={require('../img/product1.png')} alt="商品1" /><div>小米12Pro</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/2'}><img src={require('../img/product2.png')} alt="商品2" /><div>Redmi K50</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/3'}><img src={require('../img/product3.png')} alt="商品3" /><div>三星S24Ultra</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/4'}><img src={require('../img/product4.png')} alt="商品4" /><div>Apple15ProMax</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/5'}><img src={require('../img/product5.png')} alt="商品5" /><div>NIKE T恤</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/6'}><img src={require('../img/product6.png')} alt="商品6" /><div>中国李宁 短裤</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/7'}><img src={require('../img/product7.png')} alt="商品7" /><div>TLC</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/8'}><img src={require('../img/product9.png')} alt="商品8" /><div>小米</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/9'}><img src={require('../img/product8.png')} alt="商品9" /><div>海信</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/10'}><img src={require('../img/product10.png')} alt="商品10" /><div>海澜之家</div></Card></Col>
          


        </Row>
      </div>
    </div>
  );
};

export default HomePage;
