import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './ReferenceAnalysis.module.css';

export default function ReferenceAnalysis() {
    return (
        <SectionWrapper sectionNumber="— 03">
            <div className={styles.grid}>
                <div className={styles.textContent}>
                    <h2 className={styles.mainTitle}>
                        <AnimatedText
                            text="영감의 실체화."
                            tag="span"
                            animationType="fadeInUp"
                        />
                    </h2>
                    <p className={styles.description}>
                        브랜드가 지향하는 스타일과 뉘앙스를 심도 있게 분석합니다.<br />
                        단 몇 장의 레퍼런스만으로도 브랜드의 가치를 대변할 고유한 페르소나를 도출합니다.
                    </p>
                </div>
                <div className={styles.visualArea}>
                    <img
                        src="/reference_analysis_visual_1768185155960.png"
                        alt="AI Reference Analysis Dashboard"
                        className={styles.dashboardImage}
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
