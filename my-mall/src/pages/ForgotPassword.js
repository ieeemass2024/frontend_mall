import {Card, Form, Input, Button, Flex, Divider} from 'antd';
import { LockOutlined, UserOutlined,MailOutlined } from '@ant-design/icons';
import '../css/ForgotPassword.css';
import { useNavigate } from 'react-router-dom';




const ForgotPassword = () => {
    const onFinish = (values) => {
        // 获取表单数据
        const { username, email, password } = values;

        console.log(username, email, password);

        // 从localStorage中获取用户信息数组
        const users = JSON.parse(localStorage.getItem('users')) || [];

        console.log(users);

        // 找到要修改密码的用户对象
        const userIndex = users.findIndex(user => user.username === username && user.email === email);

        console.log(userIndex);
        if (userIndex !== -1) {
            // 修改用户对象的密码
            users[userIndex].password = password;

            // 将更新后的用户信息数组重新存储回localStorage中
            localStorage.setItem('users', JSON.stringify(users));

            // 密码修改成功后的操作
            alert('密码修改成功！');
            // 跳转到登录页面或其他操作
            navigator('/login');
        } else {
            // 用户名或邮箱错误
            alert('用户名或邮箱错误，请检查输入！');
            document.querySelectorAll('input').forEach(input => input.value = '');
        }
    };
    const navigator = useNavigate();
   return (
       <div className="background">
            <Card 
                style={{ width: 300 }}
                className="forgotpassword-container" 
                title="Forgot Password"
            >
                           <Form
                                name="normal_forgotpassword"
                                className="forgotpassword-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    {
                                        min: 2,
                                        max: 20,
                                        message: 'Length must be between 2 and 20',
                                    }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not a valid email!',
                                    }
                                    ]}
                                >
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    //长度8-16
                                    {
                                        min: 8,
                                        max: 16,
                                        message: 'Length must be between 8 and 16',
                                    },
                                    // 至少包含一个大写字母
                                    {
                                        pattern: /(?=.*[A-Z])/,
                                        message: 'At least one uppercase letter',
                                    },
                                    // 至少包含一个小写字母
                                    {
                                        pattern: /(?=.*[a-z])/,
                                        message: 'At least one lowercase letter',
                                    },
                                    // 至少包含一个数字
                                    {
                                        pattern: /(?=.*\d)/,
                                        message: 'At least one number',
                                    }
                                    ]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    className='password'
                                    placeholder="Password"/>
                                </Form.Item>
                                <Form.Item
                                    name="password_confirm"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password again!',
                                    },
                                    //与password一致
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
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    className='password_confirm'
                                    placeholder="Password_Confirm"/>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="forgotpassword-form-button">
                                    Reset
                                    </Button>
                                    Or<Button type='link' onClick={()=>navigator('/login')}>Back to Login</Button>
                                </Form.Item>
                            </Form>
                
            </Card>
         </div>
    );
}

export default ForgotPassword;