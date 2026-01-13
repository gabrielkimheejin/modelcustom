'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedText.module.css';

/**
 * AnimatedText Component
 * Provides split-text character reveal animation with staggered timing
 * 
 * @param {string} text - The text to animate
 * @param {string} tag - HTML tag to use (default: 'span')
 * @param {number} delay - Delay between each character animation in ms (default: 50)
 * @param {string} className - Additional CSS classes
 */
export default function AnimatedText({
    text,
    tag = 'span',
    delay = 50,
    className = '',
    animationType = 'charReveal' // 'charReveal' | 'fadeInUp' | 'none'
}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const Tag = tag;

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

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [isVisible]);

    // Split text into characters
    const characters = text.split('');

    if (animationType === 'none') {
        return <Tag className={className}>{text}</Tag>;
    }

    if (animationType === 'fadeInUp') {
        return (
            <Tag
                ref={elementRef}
                className={`${className} ${styles.fadeInUpWrapper} ${isVisible ? styles.visible : ''}`}
            >
                {text}
            </Tag>
        );
    }

    return (
        <Tag ref={elementRef} className={`${className} ${styles.animatedText}`}>
            {characters.map((char, index) => (
                <span
                    key={index}
                    className={`${styles.char} ${isVisible ? styles.charVisible : ''}`}
                    style={{
                        animationDelay: isVisible ? `${index * delay}ms` : '0ms',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </Tag>
    );
}
