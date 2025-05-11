
import { Typography } from 'antd';
import styles from './index.module.css';

const { Title } = Typography;


const Lottery: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* 左侧抽奖区域 */}
                <div className={styles.cardSection}>
                    <Title level={4} className={styles.cardTitle}>
                        <span>抽奖区域</span>
                    </Title>
                    <div className={styles.slotContainer}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lottery;