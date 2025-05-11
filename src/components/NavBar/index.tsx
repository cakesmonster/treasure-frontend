import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const { Header } = Layout;

interface NavItem {
    key: string;
    label: string;
}

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems: NavItem[] = [
        {
            key: '/album',
            label: '相册',
        },
        {
            key: '/wish',
            label: '心愿',
        },
        {
            key: '/lottery',
            label: '礼物',
        },
    ];

    return (
        <Header className={styles.navHeader}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <img src="/logo.png" alt="Treasure" className={styles.logoImage} />
                <span className={styles.logoText}>Treasure</span>
            </div>
            <nav className={styles.navMenu}>
                {navItems.map((item) => (
                    <div
                        key={item.key}
                        className={`${styles.navItem} ${location.pathname === item.key ? styles.navItemActive : ''
                            }`}
                        onClick={() => navigate(item.key)}
                    >
                        {item.label}
                    </div>
                ))}
            </nav>
            <div className={styles.userInfo}>
                <Avatar icon={<UserOutlined />} />
                <span className={styles.username}>用户名</span>
            </div>
        </Header>
    );
};

export default NavBar; 