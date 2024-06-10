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
        <Row gutter={[8, 8]} className="brand-list">
          <Col span={12}><Card><img src={require('../img/brand1.png')} alt="华为" /><div>华为</div></Card></Col>
          <Col span={12}><Card><img src={require('../img/brand2.png')} alt="小米" /><div>小米</div></Card></Col>
          <Col span={12}><Card><img src={require('../img/brand3.png')} alt="苹果" /><div>苹果</div></Card></Col>
          <Col span={12}><Card><img src={require('../img/brand4.png')} alt="三星" /><div>三星</div></Card></Col>
        </Row>
      </div>
      <div className="hot-products">
        <h2>热门商品</h2>
        <Row gutter={[8, 8]} className="product-list">
          <Col span={12}><Card onClick={() => window.location.href='/product/1'}><img src={require('../img/brand2.png')} alt="商品1" /><div>商品1</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/2'}><img src={require('../img/brand2.png')} alt="商品2" /><div>商品2</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/3'}><img src={require('../img/brand3.png')} alt="商品3" /><div>商品3</div></Card></Col>
          <Col span={12}><Card onClick={() => window.location.href='/product/4'}><img src={require('../img/brand4.png')} alt="商品4" /><div>商品4</div></Card></Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
