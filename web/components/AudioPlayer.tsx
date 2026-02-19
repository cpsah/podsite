'use client';

import { useState, useRef } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
  audioSrc: string;
  episodeTitle: string;
}

/**
 * Simple audio player with play/pause controls
 * Displays obvious play/pause button as per FR-004
 */
export default function AudioPlayer({ audioSrc, episodeTitle }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleEnded}
        aria-label={`Audio player for ${episodeTitle}`}
      />
      
      <button
        onClick={togglePlayPause}
        className={styles.playButton}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        type="button"
      >
        {isPlaying ? (
          <svg
            className={styles.icon}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg
            className={styles.icon}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <span className={styles.label}>
        {isPlaying ? 'Now Playing' : 'Play Episode'}
      </span>
    </div>
  );
}
