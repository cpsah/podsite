import { episodes } from '@/content/episodes';
import EpisodeCard from '@/components/EpisodeCard';
import styles from './page.module.css';

/**
 * Episodes catalog page showing all 20 episodes
 * User Story 2: Browse all episodes
 */
export default function EpisodesPage() {
  // Sort episodes by publishDate descending, tie-break by id
  const sortedEpisodes = [...episodes].sort((a, b) => {
    const dateComparison = new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    if (dateComparison !== 0) return dateComparison;
    return a.id.localeCompare(b.id);
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>All Episodes</h1>
        <p className={styles.subtitle}>
          Browse all {episodes.length} episodes from our podcast
        </p>
      </header>

      <div className={styles.episodeGrid}>
        {sortedEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} showPlayer={true} />
        ))}
      </div>
    </div>
  );
}
