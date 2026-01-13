import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './EmotionalDirection.module.css';

export default function EmotionalDirection() {
    return (
        <SectionWrapper sectionNumber="— 09">
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="찰나의 감정까지 섬세하게."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    시크한 무드, 생동감 넘치는 미소, 역동적인 포즈.<br />
                    디렉터의 의도에 맞춰 모델의 표정과 몸짓을 자유롭게 조절하세요.
                </p>
                <div className={styles.emotions}>
                    <div className={styles.emotionTag}>시크</div>
                    <div className={styles.emotionTag}>생동감</div>
                    <div className={styles.emotionTag}>엘레강스</div>
                    <div className={styles.emotionTag}>역동성</div>
                    <div className={styles.emotionTag}>자연스러움</div>
                </div>
            </div>
        </SectionWrapper>
    );
}
