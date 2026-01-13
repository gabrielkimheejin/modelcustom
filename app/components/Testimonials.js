'use client';

import { motion } from 'framer-motion';
import SectionHeading from './shared/SectionHeading';
import styles from './Testimonials.module.css';
import AnimatedSection from './shared/AnimatedSection';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "AI 모델 도입 후 콘텐츠 제작 속도가 10배 빨라졌어요. 이제 시즌마다 새로운 캠페인을 바로 진행할 수 있습니다.",
            author: "김민지",
            position: "마케팅 디렉터",
            company: "패션 브랜드 A",
            rating: 5
        },
        {
            quote: "제품 촬영 비용을 70% 절감했습니다. 품질은 오히려 더 일관적이고 전문적이에요.",
            author: "박준영",
            position: "CMO",
            company: "뷰티 브랜드 B",
            rating: 5
        },
        {
            quote: "다양한 장면과 스타일을 즉시 테스트할 수 있어서 마케팅 실험이 자유로워졌습니다.",
            author: "이서연",
            position: "크리에이티브 디렉터",
            company: "라이프스타일 브랜드 C",
            rating: 5
        },
    ];

    const chatBubbles = [
        { text: "와 퀄리티 미쳤다... 🤭", x: "8%", y: "15%", delay: 0.2 },
        { text: "진짜 모델인 줄 알았어요 ㅋㅋ", x: "75%", y: "12%", delay: 0.5, type: 'right' },
        { text: "제작 속도 무엇? 🚀", x: "5%", y: "55%", delay: 0.8 },
        { text: "가성비 최고입니다 ㅠㅠ 💙", x: "82%", y: "65%", delay: 1.1, type: 'right' },
        { text: "다음에 또 의뢰할게요! 👍", x: "12%", y: "82%", delay: 1.4 }
    ];

    return (
        <section className={styles.section} style={{ position: 'relative' }}>
            {/* Background Floating Chats */}
            <div className={styles.floatingChatWrapper}>
                {chatBubbles.map((bubble, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.chatBubble} ${bubble.type === 'right' ? styles.right : ''}`}
                        style={{ left: bubble.x, top: bubble.y }}
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            delay: bubble.delay,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                    >
                        {bubble.text}
                    </motion.div>
                ))}
            </div>

            <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
                <SectionHeading
                    number="08"
                    title="고객들의 생생한 후기"
                    subtitle="이미 많은 브랜드가 AI 모델로 성과를 만들어가고 있습니다"
                />

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection key={index} delay={index * 100}>
                            <div className={styles.testimonialCard}>
                                <div className={styles.rating}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className={styles.star}>★</span>
                                    ))}
                                </div>
                                <p className={styles.quote}>"{testimonial.quote}"</p>
                                <div className={styles.author}>
                                    <div className={styles.authorName}>{testimonial.author}</div>
                                    <div className={styles.authorPosition}>
                                        {testimonial.position}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
