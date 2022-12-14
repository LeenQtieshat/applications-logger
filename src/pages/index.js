import Link from 'next/link';
import styles from './Administration/styles.module.scss';

const { btn } = styles;
export default function Home() {
  return (
    <div className={styles.container}>
      <button className={btn}>
        <Link href="/Administration/logger-search">Go To Logger Search Page</Link>
      </button>
    </div>
  );
}
