import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const { btn } = styles;
function Administration() {
  return (
    <div>
      <button className={btn}>
        <Link href="/Administration/logger-search">Go To Logger Search Page</Link>
      </button>
    </div>
  );
}

export default Administration;
