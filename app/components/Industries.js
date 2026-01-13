'use client';

import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './Industries.module.css';

export default function Industries() {
    const industries = [
        {
            image: '/kbeauty_hero_25yo_commercial_1768266850176.png',
            title: 'Fashion',
            description: '시즌마다 변하는 트렌드에 맞춰 전속 모델 룩북 제작',
            stats: '제작 시간 90% 단축'
        },
        {
            image: '/kbeauty_model_texture_closeup_1768266517230.png',
            title: 'Beauty',
            description: '다양한 피부톤과 메이크업 스타일 즉시 테스트',
            stats: '모델 비용 80% 절감'
        },
        {
            image: '/kbeauty_lifestyle_seoul_1768266291985.png',
            title: 'Lifestyle',
            description: '브랜드 무드에 맞는 라이프스타일 장면 연출',
            stats: '콘텐츠 생산량 5배 증가'
        },
        {
            image: '/architectural_scenery_commercial_1768204718978.png', // Using architectural/interior asset
            title: 'Space', // Changed from F&B (as we lack food photos) to Space/Interior which matches asset
            description: '공간과 모델이 자연스럽게 어우러지는 앰비언스 촬영',
            stats: '로케이션 비용 100% 절감'
        },
        {
            image: '/kbeauty_analysis_dashboard_1768266369153.png',
            title: 'Tech',
            description: '복잡한 기능과 데이터를 직관적인 비주얼로 표현',
            stats: '마케팅 ROI 150% 향상'
        },
        {
            image: '/kbeauty_product_serum_1768266277028.png',
            title: 'Luxury',
            description: '프리미엄 브랜드 이미지에 맞는 고급스러운 비주얼',
            stats: '브랜드 인지도 200% 상승'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="09"
                    title="모든 산업에서 검증된 솔루션"
                    subtitle="패션부터 럭셔리까지, 각 산업의 니즈에 최적화된 AI 모델 서비스"
                />

                <div className={styles.industriesGrid}>
                    {industries.map((industry, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className={styles.industryCard}>
                                <div className={styles.cardBackground}>
                                    <img src={industry.image} alt={industry.title} />
                                </div>
                                <div className={styles.cardOverlay} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.industryTitle}>{industry.title}</h3>
                                    <p className={styles.industryDescription}>{industry.description}</p>
                                    <div className={styles.industryStats}>{industry.stats}</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
