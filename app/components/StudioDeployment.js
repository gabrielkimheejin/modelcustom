import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './StudioDeployment.module.css';

export default function StudioDeployment() {
    return (
        <SectionWrapper sectionNumber="— 05">
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="전용 스튜디오로의 초대."
                        tag="span"
                        animationType="fadeInUp"
                    />
                </h2>
                <p className={styles.description}>
                    완성된 모델은 귀사만의 독립된 클라우드 스튜디오에 즉시 탑재됩니다.<br />
                    이제 클릭 한 번으로 언제든 촬영을 시작할 준비가 끝났습니다.
                </p>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineNumber}>1</div>
                        <div className={styles.timelineContent}>
                            <h4>모델 완성</h4>
                            <p>전문가 검수 완료</p>
                        </div>
                    </div>
                    <div className={styles.timelineLine}></div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineNumber}>2</div>
                        <div className={styles.timelineContent}>
                            <h4>스튜디오 탑재</h4>
                            <p>클라우드 환경 배포</p>
                        </div>
                    </div>
                    <div className={styles.timelineLine}></div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineNumber}>3</div>
                        <div className={styles.timelineContent}>
                            <h4>즉시 사용 가능</h4>
                            <p>무제한 생성 시작</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
