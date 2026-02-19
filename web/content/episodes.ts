import { Episode } from './types';

/**
 * Podcast episodes collection
 * Exactly 20 mocked episodes as per FR-006
 * All episodes reference the same mocked audio file
 */
export const episodes: Episode[] = [
  {
    id: 'ep-001',
    title: 'The Future of Remote Work',
    description: 'Exploring how distributed teams are reshaping the modern workplace. We discuss the tools, challenges, and opportunities that come with remote-first culture.',
    publishDate: '2024-01-02T10:00:00Z',
    durationSeconds: 2845,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 1,
  },
  {
    id: 'ep-002',
    title: 'Building Resilient Systems',
    description: 'A deep dive into software architecture patterns that help systems survive failures. Learn from battle-tested approaches to building reliable applications.',
    publishDate: '2024-01-09T10:00:00Z',
    durationSeconds: 3120,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 2,
  },
  {
    id: 'ep-003',
    title: 'The Art of Technical Writing',
    description: 'Why writing matters in tech careers and how to communicate complex ideas clearly. Expert tips for documentation that developers actually want to read.',
    publishDate: '2024-01-16T10:00:00Z',
    durationSeconds: 2650,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 3,
  },
  {
    id: 'ep-004',
    title: 'Open Source Sustainability',
    description: 'How do maintainers keep critical projects alive? We explore funding models, community building, and the hidden economics of free software.',
    publishDate: '2024-01-23T10:00:00Z',
    durationSeconds: 2950,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 4,
  },
  {
    id: 'ep-005',
    title: 'Design Systems at Scale',
    description: 'Creating consistency across products without sacrificing creativity. Learn how top companies build and maintain design systems that teams love.',
    publishDate: '2024-01-30T10:00:00Z',
    durationSeconds: 2745,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 5,
  },
  {
    id: 'ep-006',
    title: 'The Psychology of Code Review',
    description: 'Beyond finding bugs: how code review shapes team culture and individual growth. Making reviews constructive, not confrontational.',
    publishDate: '2024-02-06T10:00:00Z',
    durationSeconds: 2580,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 6,
  },
  {
    id: 'ep-007',
    title: 'Web Performance Fundamentals',
    description: 'Making websites fast isn\'t just about optimization—it\'s about user experience. Practical techniques that make a measurable difference.',
    publishDate: '2024-02-13T10:00:00Z',
    durationSeconds: 3200,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 7,
  },
  {
    id: 'ep-008',
    title: 'Career Transitions in Tech',
    description: 'Stories from developers who changed specializations, industries, or jumped into management. What they learned and what they wish they knew.',
    publishDate: '2024-02-20T10:00:00Z',
    durationSeconds: 2890,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 8,
  },
  {
    id: 'ep-009',
    title: 'Security for Developers',
    description: 'Practical security thinking for everyday development work. Understanding threats without becoming paranoid about them.',
    publishDate: '2024-02-27T10:00:00Z',
    durationSeconds: 3050,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 9,
  },
  {
    id: 'ep-010',
    title: 'The State of JavaScript',
    description: 'What\'s actually worth learning in the ever-changing JavaScript ecosystem? We cut through the hype and focus on fundamentals.',
    publishDate: '2024-03-05T10:00:00Z',
    durationSeconds: 2920,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 10,
  },
  {
    id: 'ep-011',
    title: 'Building for Accessibility',
    description: 'Why accessibility is everyone\'s responsibility and how to build it into your process from day one. Small changes with big impact.',
    publishDate: '2024-03-12T10:00:00Z',
    durationSeconds: 2680,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 11,
  },
  {
    id: 'ep-012',
    title: 'Database Design Decisions',
    description: 'SQL or NoSQL? Normalized or denormalized? Real-world tradeoffs when choosing and designing databases for modern applications.',
    publishDate: '2024-03-19T10:00:00Z',
    durationSeconds: 3150,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 12,
  },
  {
    id: 'ep-013',
    title: 'Interview Skills for Engineers',
    description: 'Both sides of the table: how to interview well as a candidate and how to conduct interviews that actually assess what matters.',
    publishDate: '2024-03-26T10:00:00Z',
    durationSeconds: 2850,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 13,
  },
  {
    id: 'ep-014',
    title: 'Mobile Development in 2024',
    description: 'Native, hybrid, or progressive web apps? Evaluating the mobile development landscape and choosing the right approach for your project.',
    publishDate: '2024-04-02T10:00:00Z',
    durationSeconds: 2975,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 14,
  },
  {
    id: 'ep-015',
    title: 'Leading Without Authority',
    description: 'How individual contributors drive change and influence decisions. Building trust and credibility to lead from any position.',
    publishDate: '2024-04-09T10:00:00Z',
    durationSeconds: 2720,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 15,
  },
  {
    id: 'ep-016',
    title: 'Testing Strategies that Work',
    description: 'Beyond unit tests: building a testing strategy that catches real bugs without slowing down development. Practical, not dogmatic.',
    publishDate: '2024-04-16T10:00:00Z',
    durationSeconds: 3080,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 16,
  },
  {
    id: 'ep-017',
    title: 'API Design Principles',
    description: 'Creating APIs that developers enjoy using. Consistency, discoverability, and versioning strategies that stand the test of time.',
    publishDate: '2024-04-23T10:00:00Z',
    durationSeconds: 2940,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 17,
  },
  {
    id: 'ep-018',
    title: 'Burnout and Recovery',
    description: 'Recognizing the signs, understanding the causes, and finding sustainable ways to work in high-pressure tech environments.',
    publishDate: '2024-04-30T10:00:00Z',
    durationSeconds: 2800,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 18,
  },
  {
    id: 'ep-019',
    title: 'Machine Learning for Developers',
    description: 'Integrating ML into applications without a PhD. Practical advice for developers exploring machine learning capabilities.',
    publishDate: '2024-05-07T10:00:00Z',
    durationSeconds: 3180,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 19,
  },
  {
    id: 'ep-020',
    title: 'The Ethics of Technology',
    description: 'Examining our responsibility as builders of technology. Privacy, bias, and the societal impact of what we create.',
    publishDate: '2025-01-14T10:00:00Z',
    durationSeconds: 3020,
    audioSrc: '/audio/teaser.mp3',
    episodeNumber: 20,
  },
];

/**
 * Get the featured episode (most recent by publishDate)
 * Used for the landing page per FR-002
 * @returns {Episode} The episode with the most recent publishDate
 */
export function getFeaturedEpisode(): Episode {
  // Sort by publishDate descending and return first
  const sorted = [...episodes].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  return sorted[0];
}
