import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import MyPage from './pages/MyPage';
import BottomNav from './components/BottomNav';
import ProductDetailPage from './pages/ProductDetailPage'; // 导入商品详情页
import { CartProvider } from './context/CartContext';
import './css/App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
