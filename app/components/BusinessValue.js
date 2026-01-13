'use client';

import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './BusinessValue.module.css';

export default function BusinessValue() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="11"
                    title="생산성의 혁신, 비용의 합리화"
                    subtitle="수개월이 소요되던 프로세스를 단 몇 분으로 단축합니다"
                />

                <div className={styles.comparison}>
                    <AnimatedSection delay={0}>
                        <div className={styles.comparisonItem}>
                            <div className={styles.comparisonLabel}>기존 방식</div>
                            <div className={styles.comparisonValue}>3-6개월</div>
                            <ul className={styles.comparisonFeatures}>
                                <li>모델 섭외 및 협상</li>
                                <li>스케줄 조율</li>
                                <li>로케이션 촬영</li>
                                <li>후반 작업</li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <div className={styles.arrow}>→</div>

                    <AnimatedSection delay={200}>
                        <div className={`${styles.comparisonItem} ${styles.highlighted}`}>
                            <div className={styles.comparisonLabel}>AI Studio</div>
                            <div className={styles.comparisonValue}>5분</div>
                            <ul className={styles.comparisonFeatures}>
                                <li>즉시 모델 사용</li>
                                <li>무제한 장면 생성</li>
                                <li>실시간 프리뷰</li>
                                <li>즉시 다운로드</li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
