import { Card, Form, Input, Button, Flex, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const navigator = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      alert('登录成功！');
      navigator('/'); // 跳转到管理系统主页
    } else {
      alert('用户名或密码错误！');
      document.querySelectorAll('input').forEach((input) => (input.value = ''));
    }
  };

  return (
    <div className="background">
      <Card style={{ width: 300 }} className="login-container" title="Login">
       
        
              <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your Username!' },
                    { min: 2, max: 20, message: 'Length must be between 2 and 20' },
                  ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Button className="login-form-forgot" type="link" onClick={() => navigator('/forgotpassword')}>
                    Forgot password
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Login
                  </Button>
                  Or<Button type="link" onClick={() => navigator('/register')}>register now!</Button>
                </Form.Item>
              </Form>


      </Card>
    </div>
  );
};

export default Login;
