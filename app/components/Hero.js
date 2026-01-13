'use client';

import AnimatedText from './shared/AnimatedText';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.mainCopy}>
                        <AnimatedText
                            text="브랜드의 무드,"
                            tag="span"
                            delay={50}
                            className={styles.line1}
                        />
                        <br />
                        <AnimatedText
                            text="가장 완벽한 페르소나로"
                            tag="span"
                            delay={50}
                            className={styles.line2}
                        />
                        <br />
                        <AnimatedText
                            text="재탄생하다."
                            tag="span"
                            delay={50}
                            className={`${styles.line3} ${styles.gradientText}`}
                        />
                    </h1>

                    <p className={styles.subCopy}>
                        <AnimatedText
                            text="당신이 그리던 이상적인 이미지를 AI 모델로 구현합니다."
                            tag="span"
                            animationType="fadeInUp"
                        />
                        <br />
                        <AnimatedText
                            text="세팅된 모델을 통해 매 순간 새로운 크리에이티브를 전개하세요."
                            tag="span"
                            animationType="fadeInUp"
                        />
                    </p>

                    <div className={styles.cta}>
                        <button className={styles.ctaButton}>
                            도입 상담 신청
                        </button>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.heroImageWrapper}>
                        <img
                            src="/hero_ai_model_1768185138426.png"
                            alt="AI Model Persona"
                            className={styles.heroImage}
                        />
                    </div>
                    <div className={styles.visualGlow}></div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
}
