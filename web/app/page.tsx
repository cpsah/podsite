import Link from 'next/link';
import { showInfo } from '@/content/show';
import { getFeaturedEpisode } from '@/content/episodes';
import EpisodeCard from '@/components/EpisodeCard';
import styles from './page.module.css';

/**
 * Landing page featuring one episode and CTA to episodes page
 * User Story 1: Discover the featured episode
 */
export default function Home() {
  const featuredEpisode = getFeaturedEpisode();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{showInfo.title}</h1>
        <p className={styles.tagline}>{showInfo.tagline}</p>
        <p className={styles.description}>{showInfo.description}</p>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Episode</h2>
        <EpisodeCard episode={featuredEpisode} showPlayer={true} />
      </section>

      <section className={styles.cta}>
        <Link href="/episodes/" className={styles.ctaButton}>
          Browse All Episodes
        </Link>
      </section>
    </div>
  );
}
