import { Episode } from '@/content/types';
import AudioPlayer from './AudioPlayer';
import styles from './EpisodeCard.module.css';

interface EpisodeCardProps {
  episode: Episode;
  showPlayer?: boolean;
}

/**
 * Displays an episode with title, description, metadata, and optional audio player
 * @param {Episode} episode - The episode data to display
 * @param {boolean} showPlayer - Whether to show the audio player (default: false)
 */
export default function EpisodeCard({ episode, showPlayer = false }: EpisodeCardProps) {
  const publishDate = new Date(episode.publishDate);
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const durationMinutes = Math.floor(episode.durationSeconds / 60);
  const durationDisplay = `${durationMinutes} min`;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.episodeNumber}>Episode {episode.episodeNumber}</span>
        <time dateTime={episode.publishDate} className={styles.date}>
          {formattedDate}
        </time>
      </div>
      
      <h2 className={styles.title}>{episode.title}</h2>
      
      <p className={styles.description}>{episode.description}</p>
      
      <div className={styles.meta}>
        <span className={styles.duration}>{durationDisplay}</span>
      </div>

      {showPlayer && (
        <div className={styles.playerContainer}>
          <AudioPlayer audioSrc={episode.audioSrc} episodeTitle={episode.title} />
        </div>
      )}
    </article>
  );
}
