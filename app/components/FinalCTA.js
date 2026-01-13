'use client';

import { motion } from 'framer-motion';

import AnimatedSection from './shared/AnimatedSection';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <AnimatedSection delay={0}>
                        <h2 className={styles.title}>
                            <motion.span
                                initial={{ scale: 3, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    mass: 1.5
                                }}
                                style={{ display: "inline-block" }}
                            >
                                지금 바로,
                            </motion.span><br />
                            <span className={styles.gradient}>AI모델을 섭외해보세요.

                            </span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={100}>
                        <p className={styles.subtitle}>
                            모델 설계부터 전용 스튜디오 제공까지,<br />
                            전문가의 컨설팅을 통해 맞춤형 솔루션을 제안해 드립니다.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className={styles.cta}>
                            <button className={styles.btnPrimary}>모델 제작 및 도입 문의</button>
                            <button className={styles.btnSecondary}>데모 체험하기</button>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={300}>
                        <div className={styles.contact}>
                            <div>Email: hi@draph.ai</div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
