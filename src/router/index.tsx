import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Album from '../pages/Album';
import Wish from '../pages/Wish';
import Lottery from '../pages/Lottery';
import NavBar from '../components/NavBar';
import { Layout } from 'antd';
import styles from './index.module.css';
import AlbumDetail from '../pages/AlbumDetail';
const { Content, Footer } = Layout;


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout className={styles.layout}>
                <NavBar />
                <Content className={styles.content}>
                    <div className={styles.contentWrapper}>
                        <Routes>
                            <Route path="/album" element={<Album />} />
                            <Route path="/album/:id" element={<AlbumDetail />} />
                            <Route path="/wish" element={<Wish />} />
                            <Route path="/lottery" element={<Lottery />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Treasure ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
