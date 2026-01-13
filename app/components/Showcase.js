'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './shared/SectionHeading';
import styles from './Showcase.module.css';

export default function Showcase() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Background Darkening: White -> Dark Grey as it enters and stays
    // Start darkening when top of section hits bottom of viewport (start end)
    // Fully dark when it occupies the screen
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.8, 0.9],
        ["#ffffff", "#111111", "#111111", "#ffffff"]
    );

    // Text Color: Dark -> White -> Dark
    const textColor = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.8, 0.9],
        ["#000000", "#ffffff", "#ffffff", "#000000"]
    );

    // Horizontal Scroll
    // Move from 0 to -100% (or specific pixel value based on content width)
    // We want to scroll nicely.
    const x = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-150%"]);

    const showcaseItems = [
        {
            image: '/kbeauty_lifestyle_seoul_1768266291985.png',
            category: 'LIFESTYLE',
            title: 'Daily Skincare Routine'
        },
        {
            image: '/kbeauty_model_nature_1768266500960.png',
            category: 'EDITORIAL',
            title: 'Luminous Skin Campaign'
        },
        {
            image: '/kbeauty_model_texture_closeup_1768266517230.png',
            category: 'DETAIL',
            title: 'Texture & Formula'
        },
        {
            image: '/kbeauty_model_product_holding_1768266532649.png',
            category: 'COMMERCIAL',
            title: 'Premium Serum Launch'
        },
        // Duplicate for carousel length if needed, or add more variety
        {
            image: '/kbeauty_hero_25yo_commercial_1768266850176.png',
            category: 'BRANDING',
            title: 'Brand Persona'
        }
    ];

    return (
        <section ref={containerRef} className={styles.section}>
            <motion.div
                className={styles.stickyWrapper}
                style={{ backgroundColor }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.headingWrapper}
                        style={{ color: textColor }}
                    >
                        <SectionHeading
                            number="07"
                            title="실제 프로젝트 결과물"
                            subtitle="AI 모델로 제작한 실제 크리에이티브 사례"
                            glow={true}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.carouselTrack}
                        style={{ x }}
                    >
                        {showcaseItems.map((item, index) => (
                            <div key={index} className={styles.showcaseItem}>
                                <div className={styles.showcaseImage}>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className={styles.showcaseOverlay}>
                                    <span className={styles.categories}>{item.category}</span>
                                    <h4 className={styles.projectTitle}>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
