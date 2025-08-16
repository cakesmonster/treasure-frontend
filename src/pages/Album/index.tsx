import React, { useState } from 'react';
import { Typography, Avatar, Button, Upload, message, Modal, Select, Space, Divider, Form, Input } from 'antd';
import { UserOutlined, ClockCircleOutlined, PictureOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

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

interface CreateAlbumForm {
    name: string;
    description: string;
    coverImage: string;
}

const Album: React.FC = () => {
    const navigate = useNavigate();
    const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
    const [createForm] = Form.useForm<CreateAlbumForm>();

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

    // 处理上传照片
    const handleUpload = (info: any) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败`);
        }
    };

    // 打开创建相册弹窗
    const showCreateModal = () => {
        setIsCreateModalVisible(true);
    };

    // 关闭创建相册弹窗
    const handleCreateCancel = () => {
        setIsCreateModalVisible(false);
        createForm.resetFields();
    };

    // 处理创建相册
    const handleCreateSubmit = async (values: CreateAlbumForm) => {
        try {
            // TODO: 调用创建相册的 API
            console.log('创建相册:', values);
            message.success('相册创建成功！');
            handleCreateCancel();
        } catch (error) {
            message.error('创建失败，请重试');
        }
    };

    // 打开上传弹窗
    const showUploadModal = () => {
        setIsUploadModalVisible(true);
    };

    // 关闭上传弹窗
    const handleCancel = () => {
        setIsUploadModalVisible(false);
        setSelectedAlbumId(null);
    };

    // 处理相册选择
    const handleAlbumSelect = (value: number) => {
        setSelectedAlbumId(value);
    };

    return (
        <div className={styles.container}>
            {/* 顶部区域 */}
            <div className={styles.header}>
                {/* 工具栏 */}
                <div className={styles.toolbar}>
                    <Button
                        icon={<UploadOutlined />}
                        type="primary"
                        onClick={showUploadModal}
                    >
                        上传照片
                    </Button>
                    <Button
                        icon={<PlusOutlined />}
                        type="primary"
                        onClick={showCreateModal}
                    >
                        创建相册
                    </Button>
                </div>
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

            {/* 上传照片弹窗 */}
            <Modal
                title="上传照片"
                open={isUploadModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={600}
                className={styles.uploadModal}
            >
                <div className={styles.uploadContent}>
                    {/* 相册选择区域 */}
                    <div className={styles.albumSelect}>
                        <Title level={5}>选择相册</Title>
                        <Select
                            placeholder="请选择要上传到的相册"
                            style={{ width: '100%' }}
                            onChange={handleAlbumSelect}
                            value={selectedAlbumId}
                        >
                            {albumList.map(album => (
                                <Option key={album.id} value={album.id}>
                                    <Space>
                                        <img
                                            src={album.coverImage}
                                            alt={album.name}
                                            className={styles.albumSelectCover}
                                        />
                                        <span>{album.name}</span>
                                    </Space>
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <Divider style={{ margin: '2px 0' }} />

                    {/* 上传区域 */}
                    <div className={styles.uploadArea}>
                        <Title level={5}>选择照片</Title>
                        <Upload
                            name="file"
                            action="/api/upload"
                            onChange={handleUpload}
                            multiple={true}
                            disabled={!selectedAlbumId}
                            showUploadList={true}
                            className={styles.uploader}
                            listType="picture"
                        >
                            <Button
                                icon={<UploadOutlined />}
                                type="primary"
                                disabled={!selectedAlbumId}
                            >
                                选择照片
                            </Button>
                        </Upload>
                        {!selectedAlbumId && (
                            <div className={styles.uploadTip}>
                                请先选择要上传到的相册
                            </div>
                        )}
                    </div>
                </div>
            </Modal>

            {/* 创建相册弹窗 */}
            <Modal
                title="创建相册"
                open={isCreateModalVisible}
                onCancel={handleCreateCancel}
                width={450}
                className={styles.createModal}
            >
                <Form
                    style={{ margin: '12px 0' }}
                    form={createForm}
                    // layout="vertical"
                    onFinish={handleCreateSubmit}
                // requiredMark={false}
                >
                    <Form.Item
                        name="name"
                        label="相册名称"
                        rules={[{ required: true, message: '请输入相册名称' }]}
                        required={true}
                    >
                        <Input placeholder="请输入相册名称" maxLength={50} showCount />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="相册描述"
                        rules={[{ required: true, message: '请输入相册描述' }]}
                        required={true}
                    >
                        <TextArea
                            placeholder="请输入相册描述"
                            maxLength={200}
                            showCount
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Album; 