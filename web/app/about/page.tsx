import { showInfo } from '@/content/show';
import styles from './page.module.css';

/**
 * About page showing podcast information
 * User Story 3: Learn about the podcast
 */
export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About {showInfo.title}</h1>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.text}>{showInfo.description}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.text}>
            {showInfo.tagline}. Every week, we bring you in-depth conversations 
            with thought leaders, creators, and innovators who are shaping the 
            world around us. Our goal is to inspire curiosity, broaden perspectives, 
            and provide insights that you can apply to your own life and work.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Join the Conversation</h2>
          <p className={styles.text}>
            We believe that the best conversations happen when diverse voices come 
            together. Whether you&apos;re interested in technology, creativity, culture, 
            or personal growth, there&apos;s something here for you. Subscribe to stay 
            updated with our latest episodes and join our growing community of listeners.
          </p>
        </section>
      </div>
    </div>
  );
}
