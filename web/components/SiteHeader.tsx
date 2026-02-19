import Link from 'next/link';
import styles from './SiteHeader.module.css';

/**
 * Site-wide navigation header
 * Links to all main pages: Home, Episodes, About, FAQ
 */
export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Podsite
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/episodes/" className={styles.navLink}>
            Episodes
          </Link>
          <Link href="/about/" className={styles.navLink}>
            About
          </Link>
          <Link href="/faq/" className={styles.navLink}>
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
