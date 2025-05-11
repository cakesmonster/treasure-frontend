import React from 'react';
import { Typography, Tag, Avatar } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const { Title, Paragraph } = Typography;

interface WishItem {
    id: number;
    title: string;
    content: string;
    status: 'pending' | 'completed' | 'processing';
    image: string;
    creator: {
        name: string;
        avatar: string;
    };
    location: string;
    createTime: string;
}

const Wish: React.FC = () => {
    // 模拟心愿数据
    const wishList: WishItem[] = [
        {
            id: 1,
            title: '想去日本看樱花',
            content: '希望明年春天能去日本看樱花，感受春天的气息，拍下美丽的照片。',
            status: 'pending',
            image: 'https://picsum.photos/400/200?random=1',
            creator: {
                name: '张三',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
            },
            location: '日本东京',
            createTime: '2024-03-20',
        },
        {
            id: 2,
            title: '学习弹钢琴',
            content: '一直想学习弹钢琴，希望能弹奏出优美的曲子。',
            status: 'processing',
            image: 'https://picsum.photos/400/200?random=2',
            creator: {
                name: '李四',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
            },
            location: '北京',
            createTime: '2024-03-19',
        },
        {
            id: 3,
            title: '环游世界',
            content: '梦想能环游世界，体验不同国家的文化和风景。',
            status: 'completed',
            image: 'https://picsum.photos/400/200?random=3',
            creator: {
                name: '王五',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
            },
            location: '全球',
            createTime: '2024-03-18',
        },
    ];

    // 状态标签颜色映射
    const statusColors = {
        pending: 'default',
        processing: 'processing',
        completed: 'success',
    };

    // 状态文本映射
    const statusText = {
        pending: '待实现',
        processing: '进行中',
        completed: '已完成',
    };

    return (
        <div className={styles.container}>
            {/* Banner 区域 */}
            <div className={styles.banner}>
                <Title level={1} className={styles.bannerTitle}>心愿单</Title>
            </div>

            {/* 心愿卡片列表 */}
            <div className={styles.wishList}>
                {wishList.map((wish) => (
                    <div key={wish.id} className={styles.wishCard}>
                        {/* 图片区域 */}
                        <div className={styles.cardImage}>
                            <img src={wish.image} alt={wish.title} />
                        </div>

                        {/* 内容区域 */}
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <Title level={4} className={styles.cardTitle}>
                                    {wish.title}
                                </Title>
                                <Tag color={statusColors[wish.status]}>
                                    {statusText[wish.status]}
                                </Tag>
                            </div>
                            <Paragraph className={styles.cardDescription}>
                                {wish.content}
                            </Paragraph>
                        </div>

                        {/* 底部信息 */}
                        <div className={styles.cardFooter}>
                            <div className={styles.creator}>
                                <Avatar src={wish.creator.avatar} size="small" />
                                <span className={styles.creatorName}>{wish.creator.name}</span>
                            </div>
                            <div className={styles.metaInfo}>
                                <span className={styles.location}>
                                    <EnvironmentOutlined /> {wish.location}
                                </span>
                                <span className={styles.time}>
                                    <ClockCircleOutlined /> {wish.createTime}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wish;