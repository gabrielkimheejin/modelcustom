import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './HyperRealDetail.module.css';

export default function HyperRealDetail() {
    return (
        <SectionWrapper sectionNumber="— 11">
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="확대할수록 선명해지는 진실함."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    피부의 질감, 머리카락의 흐름, 제품 표면의 작은 디테일까지.<br />
                    4K 이상의 고해상도 출력물로 프리미엄 브랜드의 품격을 유지합니다.
                </p>
                <div className={styles.qualityMetrics}>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>4K+</span>
                        <span className={styles.metricLabel}>Resolution</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>Ultra</span>
                        <span className={styles.metricLabel}>Detail</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>Pro</span>
                        <span className={styles.metricLabel}>Grade</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
