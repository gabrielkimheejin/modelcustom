import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './PersonaCrafting.module.css';

export default function PersonaCrafting() {
    return (
        <SectionWrapper sectionNumber="— 04" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="가장 고도화된 미적 설계."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    단순히 인물을 생성하는 것에 그치지 않습니다.<br />
                    조명, 각도, 질감에 따라 가장 매력적으로 보일 수 있는 최적의 모델 데이터를 구축합니다.
                </p>
                <div className={styles.specs}>
                    <div className={styles.spec}>
                        <span className={styles.specLabel}>최적 각도</span>
                        <span className={styles.specValue}>360°</span>
                    </div>
                    <div className={styles.spec}>
                        <span className={styles.specLabel}>조명 시나리오</span>
                        <span className={styles.specValue}>50+</span>
                    </div>
                    <div className={styles.spec}>
                        <span className={styles.specLabel}>표정 범위</span>
                        <span className={styles.specValue}>무제한</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
