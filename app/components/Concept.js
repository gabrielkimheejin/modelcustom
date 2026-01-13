import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './Concept.module.css';

export default function Concept() {
    return (
        <SectionWrapper sectionNumber="— 02" dark>
            <div className={styles.content}>
                <h2 className={styles.mainTitle}>
                    <AnimatedText
                        text="독보적인 기술이 만드는"
                        tag="span"
                        animationType="fadeInUp"
                    />
                    <br />
                    <AnimatedText
                        text="콘텐츠의 자유"
                        tag="span"
                        animationType="fadeInUp"
                        className={styles.gradientText}
                    />
                </h2>

                <p className={styles.subText}>
                    셀럽 모델 섭외의 비용과 제약은 이제 안녕.<br />
                    AI전문그룹이 정교하게 설계한 모델로, 브랜드가 원하는 모든 장면을 직접 완성할 수 있습니다.
                </p>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureNumber}>01</div>
                        <h3>모델 섭외 불필요</h3>
                        <p>촬영 일정 조율, 계약 협상의 복잡함 없이 즉시 시작</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureNumber}>02</div>
                        <h3>물리적 제약 제거</h3>
                        <p>로케이션, 시간대, 날씨에 구애받지 않는 완전한 자유</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureNumber}>03</div>
                        <h3>무한한 확장성</h3>
                        <p>하나의 모델로 수백 가지 시나리오를 즉시 구현</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
