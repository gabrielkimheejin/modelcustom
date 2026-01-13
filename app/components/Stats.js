'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './Stats.module.css';

function CountUp({ value, suffix = '', prefix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(latest) {
                    if (node) {
                        node.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, prefix, suffix]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function Stats() {
    const stats = [
        { number: 200, suffix: '+', label: 'Happy Clients' },
        { number: 500, suffix: '+', label: 'Projects Delivered' },
        { number: 99, suffix: '%', label: 'Client Satisfaction' },
        { number: 24, suffix: '/7', label: 'Spport' }, // Treating 24/7 as 24 with /7 suffix for animation
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="02"
                    title="쇼핑몰에 특화된 AI팀에서 제작합니다."
                    subtitle="약 5년동안 커머스용 AI를 제작한 드랩에서 제공하는 서비스입니다. 전문적인 AI서비스를 경험해보세요."
                />
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>
                                    <CountUp value={stat.number} suffix={stat.suffix} />
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
