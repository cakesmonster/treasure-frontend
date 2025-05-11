import React from 'react';
import { Typography, Avatar } from 'antd';
import { UserOutlined, ClockCircleOutlined, PictureOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
const { Title, Paragraph } = Typography;

interface AlbumItem {
    id: number;
    name: string;
    description: string;
    coverImage: string;
    creator: {
        name: string;
        avatar: string;
    };
    createTime: string;
    photoCount: number;
}

const Album: React.FC = () => {
    const navigate = useNavigate();

    // 模拟相册数据
    const albumList: AlbumItem[] = [
        {
            id: 1,
            name: '日本之旅',
            description: '记录2024年春天在日本的美好时光，樱花、美食、温泉，每一刻都值得珍藏。',
            coverImage: 'https://picsum.photos/400/300?random=1',
            creator: {
                name: '张三',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
            },
            createTime: '2024-03-20',
            photoCount: 128,
        },
        {
            id: 2,
            name: '城市记忆',
            description: '记录城市中的点点滴滴，从清晨到黄昏，从繁华到宁静。',
            coverImage: 'https://picsum.photos/400/300?random=2',
            creator: {
                name: '李四',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
            },
            createTime: '2024-03-15',
            photoCount: 86,
        },
        {
            id: 3,
            name: '美食日记',
            description: '记录生活中的美食时刻，每一道菜都是一个故事。',
            coverImage: 'https://picsum.photos/400/300?random=3',
            creator: {
                name: '王五',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
            },
            createTime: '2024-03-10',
            photoCount: 64,
        },
    ];

    return (
        <div className={styles.container}>
            {/* Banner 区域 */}
            <div className={styles.banner}>
                <Title level={1} className={styles.bannerTitle}>相册</Title>
            </div>

            {/* 相册卡片列表 */}
            <div className={styles.albumList}>
                {albumList.map((album) => (
                    <div key={album.id} className={styles.albumCard} onClick={() => navigate(`/album/${album.id}`)}>
                        {/* 图片区域 */}
                        <div className={styles.cardImage}>
                            <img src={album.coverImage} alt={album.name} />
                        </div>

                        {/* 内容区域 */}
                        <div className={styles.cardContent}>
                            <Title level={4} className={styles.cardTitle}>
                                {album.name}
                            </Title>
                            <Paragraph className={styles.cardDescription}>
                                {album.description}
                            </Paragraph>
                        </div>

                        {/* 底部信息 */}
                        <div className={styles.cardFooter}>
                            <div className={styles.creator}>
                                <Avatar
                                    src={album.creator.avatar}
                                    icon={<UserOutlined />}
                                    size="small"
                                />
                                <span className={styles.creatorName}>{album.creator.name}</span>
                            </div>
                            <div className={styles.metaInfo}>
                                <span className={styles.time}>
                                    <ClockCircleOutlined /> {album.createTime}
                                </span>
                                <span className={styles.photoCount}>
                                    <PictureOutlined /> {album.photoCount}张
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album; 