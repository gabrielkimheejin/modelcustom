'use client';

import AnimatedSection from './AnimatedSection';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ number, title, subtitle, align = 'center', glow = false }) {
    return (
        <AnimatedSection>
            <div className={`${styles.heading} ${styles[align]} ${glow ? styles.glow : ''}`}>
                {number && <span className={styles.number} style={{ color: 'inherit', opacity: 0.5 }}>{number}</span>}
                <h2 className={styles.title} style={{ color: 'inherit' }}>{title}</h2>
                {subtitle && <p className={styles.subtitle} style={{ color: 'inherit', opacity: 0.7 }}>{subtitle}</p>}
            </div>
        </AnimatedSection>
    );
}
