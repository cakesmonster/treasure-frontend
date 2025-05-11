import React from 'react';
import { Typography, Image, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import styles from './index.module.css';

const { Title } = Typography;

interface PhotoItem {
    id: number;
    url: string;
    description: string;
    createTime: string;
}

interface Album {
    id: number;
    name: string;
    description: string;
    photos: PhotoItem[];
}

const AlbumDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // 自定义加载占位组件
    const ImagePlaceholder = () => (
        <div className={styles.placeholder}>
            <Spin size="small" >
                <span className={styles.placeholderText}>加载中...</span>
            </Spin>
        </div>
    );

    // 模拟相册详情数据
    const albumDetail: Album = {
        id: Number(id),
        name: '日本之旅',
        description: '记录2024年春天在日本的美好时光，樱花、美食、温泉，每一刻都值得珍藏。',
        photos: [
            {
                id: 1,
                url: 'https://picsum.photos/800/600?random=1',
                description: '东京塔下的樱花',
                createTime: '2024-03-20 10:30',
            },
            {
                id: 2,
                url: 'https://picsum.photos/800/600?random=2',
                description: '浅草寺的清晨',
                createTime: '2024-03-20 11:45',
            },
            {
                id: 3,
                url: 'https://picsum.photos/800/600?random=3',
                description: '富士山下的温泉',
                createTime: '2024-03-21 09:15',
            },
            {
                id: 4,
                url: 'https://picsum.photos/800/600?random=4',
                description: '京都古街的午后',
                createTime: '2024-03-21 14:20',
            },
            {
                id: 5,
                url: 'https://picsum.photos/800/600?random=5',
                description: '大阪城公园的日落',
                createTime: '2024-03-22 17:30',
            },
        ],
    };

    return (
        <div className={styles.container}>
            {/* Banner 区域 */}
            <div className={styles.banner}>
                <Title level={1} className={styles.bannerTitle}>{albumDetail.name}</Title>
            </div>

            {/* 照片列表 */}
            <div className={styles.photoList}>
                {albumDetail.photos.map((photo) => (
                    <div key={photo.id} className={styles.photoCard}>
                        <div className={styles.photoWrapper}>
                            <Image
                                src={photo.url}
                                alt={photo.description}
                                className={styles.photo}
                                placeholder={<ImagePlaceholder />}
                                preview={{
                                    mask: '点击预览',
                                    maskClassName: styles.previewMask,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumDetail; 