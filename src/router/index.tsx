import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
import Login from '../pages/Login';
import Album from '../pages/Album';
import AlbumDetail from '../pages/AlbumDetail';
import Wish from '../pages/Wish';
import Lottery from '../pages/Lottery';
import styles from './index.module.css';

const { Content, Footer } = Layout;

// 带布局的路由组件
const LayoutRoutes = () => {
    return (
        <Layout className={styles.layout}>
            <NavBar />
            <Content className={styles.content}>
                <div className={styles.contentWrapper}>
                    <Routes>
                        <Route path="/album" element={<Album />} />
                        <Route path="/album/:id" element={<AlbumDetail />} />
                        <Route path="/wish" element={<Wish />} />
                        <Route path="/lottery" element={<Lottery />} />
                        <Route path="/" element={<Navigate to="/album" replace />} />
                    </Routes>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Treasure ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<LayoutRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
