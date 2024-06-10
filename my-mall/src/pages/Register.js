import { Card, Form, Input, Button, Flex, Divider } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigator = useNavigate();

  const onFinish = (values) => {
    const { username, email, password } = values;
    const newUser = { username, email, password, role: 'user' }; // 默认角色为普通用户
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find((user) => user.username === username);

    if (foundUser) {
      alert('用户名已存在，请重新输入！');
      document.querySelectorAll('input').forEach((input) => (input.value = ''));
      return;
    }

    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log('用户注册成功：', newUser);
    navigator('/login');
  };

  return (
    <div className="background">
      <Card style={{ width: 300 }} className="register-container" title="Register">

              <Form name="normal_register" className="register-form" initialValues={{ remember: true }} onFinish={onFinish}>
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
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your Email!' },
                    { type: 'email', message: 'The input is not a valid email!' },
                  ]}
                >
                  <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                    { min: 8, max: 16, message: 'Length must be between 8 and 16' },
                    { pattern: /(?=.*[A-Z])/, message: 'At least one uppercase letter' },
                    { pattern: /(?=.*[a-z])/, message: 'At least one lowercase letter' },
                    { pattern: /(?=.*\d)/, message: 'At least one number' },
                  ]}
                >
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="password_confirm"
                  rules={[
                    { required: true, message: 'Please input your Password again!' },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                      },
                    }),
                  ]}
                >
                  <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password_Confirm" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="register-form-button">
                    Register
                  </Button>
                  Or<Button type="link" onClick={() => navigator('/login')}>Back to Login</Button>
                </Form.Item>
              </Form>
      </Card>
    </div>
  );
};

export default Register;
