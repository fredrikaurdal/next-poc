import { useState, useEffect } from 'react';
import styles from '../../styles/sass/components/layouts/Dashboard.module.scss';
import React from 'react';
import { getFromStorage } from '../../utils/storage';

export default function Layout({ children, setToken }) {
  return <div className={styles.layout}>{children}</div>;
}
