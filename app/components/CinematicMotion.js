import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './CinematicMotion.module.css';

export default function CinematicMotion() {
    return (
        <SectionWrapper sectionNumber="— 12" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="정적인 컷에 생명력을 불어넣다."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    생성된 이미지를 단숨에 감각적인 영상으로 확장하세요.<br />
                    바람에 흩날리는 머릿결과 자연스러운 움직임이 담긴 숏폼으로 시선을 사로잡습니다.
                </p>
                <div className={styles.motionPreview}>
                    <img
                        src="/cinematic_motion_frame_1768185276525.png"
                        alt="Cinematic Motion Example"
                        className={styles.motionImage}
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
