import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './IndustrialApplication.module.css';

export default function IndustrialApplication() {
    return (
        <SectionWrapper sectionNumber="— 14" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="카테고리의 경계를 넘는 유연함."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    패션, 뷰티, 라이프스타일, F&B까지.<br />
                    각 산업군에 최적화된 연출 방식을 통해 브랜드 경쟁력을 극대화합니다.
                </p>
                <div className={styles.showcase}>
                    <img
                        src="/fashion_showcase_1768185291839.png"
                        alt="Fashion Industry Application"
                        className={styles.showcaseImage}
                    />
                </div>
                <div className={styles.industries}>
                    <div className={styles.industryTag}>Fashion</div>
                    <div className={styles.industryTag}>Beauty</div>
                    <div className={styles.industryTag}>Lifestyle</div>
                    <div className={styles.industryTag}>F&B</div>
                    <div className={styles.industryTag}>Tech</div>
                    <div className={styles.industryTag}>Luxury</div>
                </div>
            </div>
        </SectionWrapper>
    );
}
