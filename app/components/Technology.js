'use client';

import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './Technology.module.css';

export default function Technology() {
    const features = [
        {
            number: '01',
            title: 'Hyper-Realistic Detail',
            description: '4K 이상의 초고해상도 출력으로 피부 질감, 머리카락 흐름까지 완벽 재현',
            metric: '4K+',
            label: 'Resolution'
        },
        {
            number: '02',
            title: 'Advanced Lighting Engine',
            description: '스튜디오 조명부터 자연광까지, 빛의 온도와 방향을 정밀하게 제어',
            metric: '50+',
            label: 'Lighting Presets'
        },
        {
            number: '03',
            title: 'Real-time Generation',
            description: '최적화된 AI 엔진으로 실시간 프리뷰 및 빠른 렌더링 지원',
            metric: '< 5min',
            label: 'Generation Time'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="06"
                    title="업계 최고 수준의 AI 기술"
                    subtitle="최신 생성형 AI 모델과 자체 개발 엔진으로 프로페셔널 품질을 보장합니다"
                />

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <AnimatedSection key={feature.number} delay={index * 100}>
                            <div className={styles.featureCard}>
                                <div className={styles.featureNumber}>{feature.number}</div>
                                <div className={styles.featureContent}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                    <div className={styles.metric}>
                                        <div className={styles.metricValue}>{feature.metric}</div>
                                        <div className={styles.metricLabel}>{feature.label}</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={300}>
                    <div className={styles.techStack}>
                        <p className={styles.techLabel}>Powered by</p>
                        <div className={styles.techLogos}>
                            <span className={styles.techItem}>Advanced AI Models</span>
                            <span className={styles.techItem}>Cloud GPU</span>
                            <span className={styles.techItem}>Real-time Processing</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
