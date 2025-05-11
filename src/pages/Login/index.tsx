import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values: LoginForm) => {
        try {
            // TODO: 这里添加实际的登录逻辑
            console.log('登录信息:', values);
            message.success('登录成功！');
            navigate('/'); // 登录成功后跳转到首页
        } catch (error) {
            message.error('登录失败，请重试');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <Card className={styles.loginCard}>
                    <h1 className={styles.title}>欢迎登录</h1>
                    <Form
                        form={form}
                        name="login"
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="用户名"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Login; 