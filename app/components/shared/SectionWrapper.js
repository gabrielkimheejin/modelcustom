'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SectionWrapper.module.css';

/**
 * SectionWrapper Component
 * Provides consistent section styling with scroll-triggered animations
 * 
 * @param {React.ReactNode} children - Content to wrap
 * @param {string} sectionNumber - Section number (e.g., "01")
 * @param {string} className - Additional CSS classes
 * @param {boolean} dark - Use dark background variant
 */
export default function SectionWrapper({
    children,
    sectionNumber,
    className = '',
    dark = false
}) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className={`${styles.section} ${dark ? styles.dark : ''} ${className} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                {sectionNumber && (
                    <span className={styles.sectionNumber}>
                        {sectionNumber}
                    </span>
                )}
                {children}
            </div>
        </section>
    );
}
