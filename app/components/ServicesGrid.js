'use client';

import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
    const services = [
        {
            title: '자유로운 포즈 연출',
            description: '360도 모든 각도에서 모델의 동작을 자유롭게 제어',
            image: '/kbeauty_hero_model_1768266261739.png'
        },
        {
            title: '제품 사용 컷',
            description: '제품을 손에 들거나 사용하는 자연스러운 연출',
            image: '/kbeauty_model_product_holding_1768266532649.png'
        },
        {
            title: '제품 착장 컷',
            description: '의류, 액세서리 등을 실제로 착용한 듯한 핏감',
            image: '/kbeauty_hero_25yo_commercial_1768266850176.png'
        },
        {
            title: '영상 제작',
            description: '움직이는 AI 모델로 시선을 사로잡는 영상 콘텐츠',
            image: '/kbeauty_studio_set_1768266352426.png'
        },
        {
            title: '다양한 배경 합성',
            description: '스튜디오부터 야외 로케이션까지 제약 없는 배경',
            image: '/kbeauty_nature_ingredients_1768266310696.png'
        },
        {
            title: '디테일한 표정 연기',
            description: '브랜드 무드에 맞는 섬세한 표정과 감정 표현',
            image: '/kbeauty_model_texture_closeup_1768266517230.png'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="05"
                    title="하나의 모델로 만드는 다채로운 콘텐츠"
                    subtitle="단 한 명의 AI 모델로 룩북, 사용 컷, 영상까지 모든 크리에이티브를 완성하세요."
                />
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className={styles.serviceCard}>
                                <div className={styles.cardBackground}>
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className={styles.cardOverlay} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
