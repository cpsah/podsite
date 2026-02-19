import { faqs } from '@/content/faqs';
import styles from './page.module.css';

/**
 * FAQ page showing frequently asked questions
 * User Story 3: Learn about the podcast
 */
export default function FAQPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Find answers to common questions about our podcast
        </p>
      </header>

      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <article key={faq.id} className={styles.faqItem}>
            <h2 className={styles.question}>{faq.question}</h2>
            <p className={styles.answer}>{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
