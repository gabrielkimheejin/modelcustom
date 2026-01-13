'use client';

import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './Process.module.css';

export default function Process() {
    const steps = [
        {
            number: '01',
            title: '트렌드 분석',
            description: '최신 뷰티 트렌드와 브랜드 무드를 심도 있게 분석합니다.',
            image: '/kbeauty_analysis_dashboard_1768266369153.png'
        },
        {
            number: '02',
            title: '페르소나 조형',
            description: '한국인 얼굴 데이터 기반으로 가장 이상적인 뷰티 모델을 구축합니다.',
            image: '/kbeauty_persona_grid_2x2_1768266770051.png'
        },
        {
            number: '03',
            title: '스튜디오 촬영',
            description: '가상 스튜디오에서 완벽한 조명과 각도로 촬영합니다.',
            image: '/kbeauty_studio_set_1768266352426.png'
        },
        {
            number: '04',
            title: '결과물 생성',
            description: '화보급 퀄리티의 이미지를 즉시 생성하고 활용하세요.',
            image: '/kbeauty_hero_model_1768266261739.png'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="04"
                    title="4단계 프로세스로 완성하는 전속 AI 모델"
                    subtitle="레퍼런스 분석부터 무한 생성까지, 심플하고 명확한 프로세스"
                />
                <div className={styles.processGrid}>
                    {steps.map((step, index) => (
                        <AnimatedSection key={step.number} delay={index * 300}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepImage}>
                                    <img src={step.image} alt={step.title} />
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
