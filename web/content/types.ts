/**
 * Content types for podcast site
 */

export interface Episode {
  id: string;
  title: string;
  description: string;
  publishDate: string; // ISO 8601 format
  durationSeconds: number;
  audioSrc: string; // URL or path to audio file
  episodeNumber: number;
}

export interface ShowInfo {
  title: string;
  tagline: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
