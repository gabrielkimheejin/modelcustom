import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './ClosingInquiry.module.css';

export default function ClosingInquiry() {
    return (
        <SectionWrapper sectionNumber="— 15">
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="지금 바로"
                        tag="span"
                        animationType="fadeInUp"
                    />
                    <br />
                    <AnimatedText
                        text="AI모델을 섭외해보세요."
                        tag="span"
                        animationType="fadeInUp"
                        className={styles.highlight}
                    />
                </h2>
                <p className={styles.description}>
                    모델 설계부터 전용 스튜디오 제공까지,<br />
                    전문가의 컨설팅을 통해 맞춤형 솔루션을 제안해 드립니다.
                </p>
                <div className={styles.cta}>
                    <button className={styles.ctaButton}>
                        모델 제작 및 도입 문의
                    </button>
                </div>
                <div className={styles.contact}>
                    <p>Email: hi@draph.ai</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
