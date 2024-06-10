import React, { useState } from 'react';
import { Input, Carousel, Row, Col, Card } from 'antd';
import { SearchOutlined, AppstoreOutlined, GiftOutlined, DollarOutlined, PercentageOutlined } from '@ant-design/icons';
import '../css/HomePage.css';

const { Search } = Input;

const products = [
  { id: 1, name: '小米12Pro', img: require('../img/product1.png') },
  { id: 2, name: 'Redmi K50', img: require('../img/product2.png') },
  { id: 3, name: 'Apple15ProMax', img: require('../img/product4.png') },
  { id: 4, name: '三星S24Ultra', img: require('../img/product3.png') },
  { id: 5, name: 'NIKE T恤', img: require('../img/product5.png') },
  { id: 6, name: '中国李宁 短裤', img: require('../img/product6.png') },
  { id: 7, name: 'TLC 65T7K', img: require('../img/product7.png') },
  { id: 8, name: '小米 L75MA', img: require('../img/product9.png') },
  { id: 9, name: '海信 Vidda R55 Pro', img: require('../img/product8.png') },
  { id: 10, name: '海澜之家 短袖', img: require('../img/product10.png') }
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home-page">
      <div className="search-bar">
        <Search
          placeholder="请输入商品名 如: 小米"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={handleSearch}
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
          {filteredProducts.map(product => (
            <Col span={12} key={product.id}>
              <Card onClick={() => window.location.href=`/product/${product.id}`}>
                <img src={product.img} alt={product.name} />
                <div>{product.name}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
