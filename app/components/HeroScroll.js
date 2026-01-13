'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './HeroScroll.module.css';
import AnimatedSection from './shared/AnimatedSection';

const RotatingText = () => {
    const words = ["가장 완벽한", "꿈꿔왔던", "무드에 맞는"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={styles.rotatingWrapper}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={styles.rotatingText}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default function HeroScroll() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Animation Logic ---
    // Text Opacity: Fades out quickly as we scroll
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Background Color: White -> Black
    const backgroundColor = useTransform(scrollYProgress, [0.1, 0.4], ["#ffffff", "#000000"]);

    // Visual Position & Scale
    // We need to move from "Right Grid Position" to "Center Full Width"
    // Since CSS Grid positions are hard to anim between, we'll use absolute positioning calculations.
    // Assuming desktop layout: Container is 1280px wide. Grid is 1.2fr 1fr. Gap 80.
    // This makes the right column roughly start at 60% of width.

    // Simplification for responsiveness: 
    // We'll trust relative percentage movements or use specific values.
    // Initial State (Scroll 0): width: '40%', right: '5%', top: 'centered'
    // Final State (Scroll 0.5): width: '90%', left: '5%', (centered), top: 'centered'

    // Let's use standard responsive logic
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 968);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop transforms
    const desktopWidth = useTransform(scrollYProgress, [0, 0.4], ["40%", "90%"]);
    const desktopRight = useTransform(scrollYProgress, [0, 0.4], ["2%", "5%"]); // Moving towards center (5% right + 5% left = 90% width center)
    // Actually, to center it: left + right + width = 100%. If width=90%, left=5%.
    // Initially: Right column. Let's approximate right: 0 or inside container padding.

    // Let's use `left` instead.
    // Initial: left ~ 55% (to be on the right side) -> Final: left 5%
    const desktopLeft = useTransform(scrollYProgress, [0, 0.4], ["55%", "5%"]);

    // Border Radius: Round to slightly less round or keep same
    const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["24px", "20px"]);

    // Video Opacity: Fade in video player controls/overlay when centered
    // We want the IMAGE to fade OUT, revealing the video underneath.
    // Transition happens around the end of movement (0.3 - 0.5)

    // Image Opacity: 1 -> 0
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

    // Video Controls Opacity
    const showreelOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    // Mobile transforms (Image usually starts top or bottom)
    // Assuming Mobile: Image is top or middle. We just scale it up.
    const mobileWidth = useTransform(scrollYProgress, [0, 0.4], ["90%", "100%"]);
    const mobileLeft = "0%"; // centered relative to container padding?

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.stickyContainer}>

                {/* Background Layer (White -> Black) */}
                <motion.div
                    className={styles.backgroundLayer}
                    style={{ backgroundColor }}
                />

                {/* Text Content (Hero) */}
                <motion.div
                    className={styles.textWrapper}
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <div className={styles.textContent}>
                        <AnimatedSection delay={0}>
                            <h1 className={styles.title}>
                                <RotatingText /><br />
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
                    {/* Empty div for grid alignment if needed */}
                    <div></div>
                </motion.div>

                {/* Visual Content (Image -> Video) */}
                <motion.div
                    className={styles.visualContainer}
                    style={{
                        width: isMobile ? mobileWidth : desktopWidth,
                        left: isMobile ? '50%' : desktopLeft,
                        x: isMobile ? '-50%' : 0, // Center on mobile
                        top: '50%',
                        y: '-50%',
                        borderRadius,
                        height: 'auto',
                        aspectRatio: '16/9', // Enforce video aspect ratio
                        maxHeight: '90vh'
                    }}
                >
                    {/* The Thumbnail Image (Fades Out) */}
                    <motion.img
                        src="/hero_thumb.jpg"
                        alt="Brand Video Thumbnail"
                        className={styles.media}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 3,
                            opacity: imageOpacity // Controlled by scroll
                        }}
                    />

                    {/* The Video (Playing underneath) */}
                    <video
                        className={styles.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <source src="/showreel.mp4" type="video/mp4" />
                    </video>

                    {/* Showreel Overlay UI (Appears after transition) */}
                    <motion.div
                        className={styles.overlay}
                        style={{ opacity: showreelOpacity, zIndex: 4 }}
                    >
                        <div className={styles.playButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3L19 12L5 21V3Z" fill="white" />
                            </svg>
                        </div>
                        <div className={styles.label}>Brand Showreel</div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
