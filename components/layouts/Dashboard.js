import styles from '../../styles/sass/components/layouts/Dashboard.module.scss';
import React from 'react';

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
