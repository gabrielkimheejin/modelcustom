'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Rotation: 0 -> 180 degrees
    // Trigger the flip during the middle phase of the scroll
    const rotateY = useTransform(scrollYProgress, [0.3, 0.6], [0, 180]);

    // Title Opacity Transition
    const titleOpacityFront = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
    const titleOpacityBack = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

    const items = [
        {
            problem: {
                icon: '/icon_3d_clock.png',
                title: '긴 제작 기간',
                description: '셀럽 섭외부터 촬영까지 수개월 소요'
            },
            solution: {
                icon: '/icon_3d_lightning.png',
                title: '압도적인 제작 속도',
                description: 'AI 모델링으로 단 몇 분 만에 결과물 완성'
            }
        },
        {
            problem: {
                icon: '/icon_3d_money.png',
                title: '높은 제작 비용',
                description: '모델료, 스튜디오 대여료, 스태프 인건비'
            },
            solution: {
                icon: '/icon_3d_diamond.png',
                title: '혁신적인 비용 절감',
                description: '기존 대비 1/10 비용으로 고퀄리티 화보 제작'
            }
        },
        {
            problem: {
                icon: '/icon_3d_calendar.png',
                title: '스케줄 조율 어려움',
                description: '모델, 스튜디오, 스태프 일정 맞추기'
            },
            solution: {
                icon: '/icon_3d_target.png',
                title: '시공간의 제약 없음',
                description: '언제 어디서든 원하는 컨셉 즉시 구현'
            }
        },
        {
            problem: {
                icon: '/icon_3d_refresh.png',
                title: '수정의 한계',
                description: '촬영 후 재촬영 시 추가 비용 발생'
            },
            solution: {
                icon: '/icon_3d_wrench.png',
                title: '무제한 수정 자유',
                description: '추가 비용 없이 원하는 대로 자유롭게 수정'
            }
        },
    ];

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.stickyWrapper}>
                <div className={styles.container}>
                    {/* Dynamic Title */}
                    <div className={styles.sectionTitle}>
                        <motion.h3
                            className={styles.titleInitial}
                            style={{ opacity: titleOpacityFront }}
                        >
                            기존 방식의 문제
                        </motion.h3>
                        <motion.h3
                            className={styles.titleFinal}
                            style={{ opacity: titleOpacityBack }}
                        >
                            AI Studio 솔루션
                        </motion.h3>
                    </div>

                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.cardContainer}>
                                <motion.div
                                    className={styles.cardInner}
                                    style={{ rotateY }}
                                >
                                    {/* Front: Problem */}
                                    <div className={styles.cardFront}>
                                        <div className={styles.iconWrapper}>
                                            <img src={item.problem.icon} alt={item.problem.title} className={styles.iconImage} />
                                        </div>
                                        <h4 className={styles.cardTitle}>{item.problem.title}</h4>
                                        <p className={styles.cardDescription}>{item.problem.description}</p>
                                    </div>

                                    {/* Back: Solution */}
                                    <div className={styles.cardBack}>
                                        <div className={styles.iconWrapper}>
                                            <img src={item.solution.icon} alt={item.solution.title} className={styles.iconImage} />
                                        </div>
                                        <h4 className={styles.cardTitle}>{item.solution.title}</h4>
                                        <p className={styles.cardDescription}>{item.solution.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
