import { motion } from 'framer-motion';
import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './EfficiencySpeed.module.css';

export default function EfficiencySpeed() {
    return (
        <SectionWrapper sectionNumber="— 13">
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="생산성의 혁신, 비용의 합리화."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    수개월이 소요되던 로케이션 촬영과 모델 조율 과정을 단 몇 분으로 단축합니다.<br />
                    가장 적은 자원으로 가장 풍부한 콘텐츠 라이브러리를 구축하세요.
                </p>
                <div className={styles.comparison}>
                    <div className={styles.comparisonItem}>
                        <span className={styles.comparisonLabel}>기존 방식</span>
                        <span className={styles.comparisonValue}>3-6개월</span>
                    </div>
                    <div className={styles.comparisonArrow}>→</div>
                    <motion.div
                        className={styles.comparisonItem + ' ' + styles.highlighted}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2, -2, 0],
                            scale: [1.05, 1.08, 1.05]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className={styles.badge}>RECOMMENDED</div>
                        <span className={styles.comparisonLabel}>AI Studio</span>
                        <span className={styles.comparisonValue}>5분</span>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper >
    );
}
