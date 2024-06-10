import React, { useState } from 'react';
import { Menu, Row, Col, Card } from 'antd';
import '../css/CategoryPage.css';

const categories = {
  '服饰装扮': [
    { name: '男装', icon: '👔' ,no:'2'},
    { name: '女装', icon: '👗' },
    { name: '童装', icon: '👕' }
  ],
  '手机数码': [
    { name: '手机', icon: '📱' ,no:'1'},
    { name: '平板', icon: '💻' },
    { name: '配件', icon: '🔌' }
  ],
  '家用电器': [
    { name: '电视', icon: '📺' ,no:'3'},
    { name: '空调', icon: '❄️' },
    { name: '洗衣机', icon: '🧺' }
  ],
  '家具家装': [
    { name: '厨房卫浴', icon: '🍽️' },
    { name: '灯饰照明', icon: '💡' },
    { name: '五金工具', icon: '🛠️' },
    { name: '卧室家具', icon: '🛏️' },
    { name: '客厅家具', icon: '🛋️' }
  ],
  '汽车用品': [
    { name: '车载电器', icon: '🔌' },
    { name: '美容清洗', icon: '🧽' },
    { name: '维修保养', icon: '🔧' }
  ],
  '电脑办公': [
    { name: '笔记本', icon: '💻' },
    { name: '台式机', icon: '🖥️' },
    { name: '打印机', icon: '🖨️' }
  ]
};

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('手机数码');

  return (
    <div className="category-page">
      <Menu
        mode="vertical"
        defaultSelectedKeys={['手机数码']}
        className="categories"
        onClick={(e) => setSelectedCategory(e.key)}
      >
        {Object.keys(categories).map((category) => (
          <Menu.Item key={category}>{category}</Menu.Item>
        ))}
      </Menu>
      <div className="category-items">
        <h2>{selectedCategory}</h2>
        <Row gutter={[16, 16]} className="item-list">
          {categories[selectedCategory].map((item) => (
            <Col span={12} key={item.name}> {/* 调整为span={12}以便放下文字 */}
              <Card onClick={() => window.location.href= `/category/${item.no}`}>
                <div className="item-icon">{item.icon}</div>
                {item.name}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CategoryPage;
