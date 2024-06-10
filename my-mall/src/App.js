import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link ,useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import MyPage from './pages/MyPage';
import BottomNav from './components/BottomNav';
import ProductDetailPage from './pages/ProductDetailPage'; // 导入商品详情页
import { CartProvider } from './context/CartContext';
import './css/App.css';
import Login from './pages/LoginPage';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ProductListPage from './pages/ProductListPage';
import PaymentPage from "./pages/PaymentPage";
import PaySuccessPage from "./pages/PaySuccessPage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showBottomNav = (location.pathname === '/login'||location.pathname === '/register'||location.pathname === '/forgotpassword');

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryID" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/pay-success' element={<PaySuccessPage/>} />
      </Routes>
      {!showBottomNav && <BottomNav />}
    </div>
  );
}

export default App;
