'use client';

import AnimatedSection from './shared/AnimatedSection';
import styles from './NewHero.module.css';

export default function NewHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <AnimatedSection delay={0}>
                        <h1 className={styles.title}>
                            가장 완벽한<br />
                            브랜드 모델을<br />
                            <span className={styles.gradient}>만들어보세요.</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={100}>
                        <p className={styles.subtitle}>
                            당신이 그리던 이상적인 모델을 AI로 구현합니다.<br />
                            원하는 외모의 모델을 활용하여, 브랜드를 다양하게 표현해보세요.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className={styles.cta}>
                            <button className={styles.btnPrimary}>도입 상담 신청</button>
                            <button className={styles.btnSecondary}>데모 보기</button>
                        </div>
                    </AnimatedSection>
                </div>
                <AnimatedSection delay={300}>
                    <div className={styles.visual}>
                        <img
                            src="/kbeauty_hero_25yo_commercial_1768266850176.png"
                            alt="K-Beauty Model"
                            className={styles.heroImage}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
