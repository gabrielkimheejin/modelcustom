import SectionWrapper from './shared/SectionWrapper';
import AnimatedText from './shared/AnimatedText';
import styles from './ProductIntegration.module.css';

export default function ProductIntegration() {
    return (
        <SectionWrapper sectionNumber="— 07">
            <div className={styles.grid}>
                <div className={styles.visualArea}>
                    <img
                        src="/product_integration_mockup_1768185170935.png"
                        alt="Product Integration Example"
                        className={styles.productImage}
                    />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.mainTitle}>
                        <AnimatedText
                            text="제품의 가치를 돋보이게 하는 리얼리즘."
                            tag="span"
                            animationType="fadeInUp"
                        />
                    </h2>
                    <p className={styles.description}>
                        제품 사진을 업로드하는 순간, 모델과 하나가 됩니다.<br />
                        제품의 재질과 형태를 반영한 자연스러운 상호작용을 구현합니다.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
