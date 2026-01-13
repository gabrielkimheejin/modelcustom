import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './CreativeStudio.module.css';

export default function CreativeStudio() {
    return (
        <SectionWrapper sectionNumber="— 06" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="상상을 결과물로 바꾸는"
                        tag="span"
                        animationType="fadeInUp"
                    />
                    <br />
                    <AnimatedText
                        text="직관적인 경험."
                        tag="span"
                        animationType="fadeInUp"
                        className={styles.highlight}
                    />
                </h2>
                <p className={styles.description}>
                    복잡한 프로세스는 생략했습니다.<br />
                    익숙하고 간결한 UI를 통해, 사내 디자이너부터 마케터까지 누구나 수준 높은 화보를 제작할 수 있습니다.
                </p>
                <div className={styles.studioPreview}>
                    <img
                        src="/studio_workspace_1768185188078.png"
                        alt="Creative Studio Workspace"
                        className={styles.studioImage}
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
