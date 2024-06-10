import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import '../css/ProductListPage.css';


const products = {
  '1': [
    { id: '1', name: '小米12pro', price: '2999',img: '1' },
    { id: '2', name: 'Redmi K50', price: '2099',img: '2'},
    { id: '3', name: 'IPhone 15pm',  price: '9999',img: '4'},
    { id: '4', name: '三星S24Ultra', price: '3999',img: '3'}
  ],
  '2': [
    { id: '5', name: 'NIKE T恤', price: '299',img: '5'},
    { id: '6', name: '中国李宁 短裤', price: '399',img: '6'},
    { id: '10', name: '海澜之家', price: '199',img: '10'}
  ],
  '3': [
    { id: '7', name: 'TLC', price: '2999',img: '7'},
    { id: '8', name: '小米', price: '3999',img: '2'},
    { id: '9', name: '海信', price: '1999',img: '8'}

  ]
  // 添加更多类别和商品
};

const ProductListPage = () => {
  const { categoryID } = useParams();
  const categoryProducts = products[categoryID] || [];

  return (
    <div className="product-list-page">
      <div className="hot-products">
        <h2>商品列表</h2>
        <Row gutter={[8, 8]} className="product-list">
        {categoryProducts.map(product => (
          <Col span={12}>
            <Card onClick={() => window.location.href=`/product/${product.id}`}>
              <img src={require(`../img/product${product.img}.png`)} alt="product.name" />
              <div>{product.name}</div>
              <div className="product-price">
                <div className="price">￥{product.price}</div>
                <div className='fu'> 1000+人付款</div>
              </div>
              
            </Card>
          </Col>))}
          
        </Row>
      </div>
    </div>
  );
};

export default ProductListPage;
