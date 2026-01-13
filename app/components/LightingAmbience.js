import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './LightingAmbience.module.css';

export default function LightingAmbience() {
    return (
        <SectionWrapper sectionNumber="— 10" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="빛의 온도를 다루는 정교함."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    스튜디오의 강렬한 조명부터 새벽녘의 은은한 자연광까지.<br />
                    제품과 모델에 맺히는 빛의 흐름을 계산하여 압도적인 시각적 몰입감을 제공합니다.
                </p>
                <div className={styles.lightingShowcase}>
                    <div className={styles.lightingExample}>
                        <img src="/lighting_golden_hour_1768185238781.png" alt="Golden Hour Lighting" />
                        <div className={styles.lightingLabel}>Golden Hour</div>
                    </div>
                    <div className={styles.lightingExample}>
                        <img src="/lighting_studio_1768185257445.png" alt="Studio Lighting" />
                        <div className={styles.lightingLabel}>Studio Light</div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
