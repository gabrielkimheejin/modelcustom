'use client';

import { useState } from 'react';
import AnimatedSection from './shared/AnimatedSection';
import SectionHeading from './shared/SectionHeading';
import styles from './FAQ.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'AI 모델은 어떻게 만들어지나요?',
            answer: '레퍼런스 이미지를 제공하시면, 전문가가 브랜드 아이덴티티에 맞춰 AI 모델을 정교하게 설계합니다. 일반적으로 5-7일 정도 소요됩니다.'
        },
        {
            question: '생성된 이미지의 저작권은 누구에게 있나요?',
            answer: '생성된 모든 이미지의 저작권은 전적으로 고객사에 귀속됩니다. 상업적 용도로 자유롭게 사용하실 수 있습니다.'
        },
        {
            question: '모델의 일관성은 어떻게 유지되나요?',
            answer: '전용 AI 모델로 학습되어 있어, 동일한 페르소나가 다양한 장면과 포즈에서도 일관되게 유지됩니다.'
        },
        {
            question: '한 달에 몇 장까지 생성 가능한가요?',
            answer: '사전에 협의된 상황에 따라 상이합니다.'
        },
        {
            question: '기존 촬영 데이터로도 모델을 만들 수 있나요?',
            answer: '네, 기존에 촬영한 모델 사진이 있다면 해당 데이터를 활용해 AI 모델을 제작할 수 있습니다.'
        },
        {
            question: '수정이나 재생성은 가능한가요?',
            answer: '네, 무제한으로 수정하고 재생성할 수 있습니다.'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    number="10"
                    title="자주 묻는 질문"
                    subtitle="궁금하신 점이 있으신가요? 가장 많이 문의하시는 내용을 정리했습니다"
                />

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 50}>
                            <div
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.faqIcon}>{openIndex === index ? '−' : '+'}</span>
                                </button>
                                {openIndex === index && (
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
