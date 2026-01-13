import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './VersatileScenery.module.css';

export default function VersatileScenery() {
    return (
        <SectionWrapper sectionNumber="— 08" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="제한 없는 미장센의 전개."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    도심의 세련됨부터 자연의 평온함까지.<br />
                    원하는 장소를 선택하거나 묘사하여, 매번 새로운 분위기의 캠페인을 연출할 수 있습니다.
                </p>
                <div className={styles.sceneShowcase}>
                    <div className={styles.sceneImage}>
                        <img src="/scenery_urban_1768185205795.png" alt="Urban Scene" />
                        <div className={styles.sceneLabel}>도심의 세련됨</div>
                    </div>
                    <div className={styles.sceneImage}>
                        <img src="/scenery_nature_1768185220702.png" alt="Nature Scene" />
                        <div className={styles.sceneLabel}>자연의 평온함</div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
