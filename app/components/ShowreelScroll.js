'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ShowreelScroll.module.css';

export default function ShowreelScroll() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Scale from 0.8 to 1 over the entrance phase (scrolling up to top)
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

    // Background color scaling from White to Black as it enters
    const backgroundColor = useTransform(scrollYProgress, [0, 0.4], ["#ffffff", "#000000"]);

    // Opacity fade out at the very end
    const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    return (
        <motion.section
            ref={containerRef}
            className={styles.section}
            style={{ backgroundColor }}
        >
            <div className={styles.stickyContainer}>
                <motion.div
                    style={{ scale, opacity }}
                    className={styles.videoContainer}
                >
                    <div className={styles.overlay}>
                        <div className={styles.playButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3L19 12L5 21V3Z" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.label}>Brand Showreel</div>
                    </div>
                    {/* Showreel Video */}
                    <video
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/showreel.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </div>
        </motion.section>
    );
}
