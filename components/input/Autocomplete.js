import { useState, useEffect } from 'react';
import styles from '../../styles/sass/components/input/Autocomplete.module.scss';

export default function Autocomplete() {
  return (
    <div className={styles.autocomplete}>
      <div className={styles.result}>
        <img src="https://project-exam-2.s3.eu-north-1.amazonaws.com/small_fjord_hotel_compressed_6917b2188c.jpg" />
        <div className={styles.description}>
          <div className={styles.description__heading}>Fjord Hotel</div>
          <div className={styles.description__address}>
            Vågsallmenningen 1, 5014 Bergen
          </div>
        </div>
      </div>

      <div className={styles.result}>
        <img src="https://project-exam-2.s3.eu-north-1.amazonaws.com/small_fjord_hotel_compressed_6917b2188c.jpg" />
        <div className={styles.description}>
          <div className={styles.description__heading}>Fjord Hotel</div>
          <div className={styles.description__address}>
            Vågsallmenningen 1, 5014 Bergen
          </div>
        </div>
      </div>

      <div className={styles.result}>
        <img src="https://project-exam-2.s3.eu-north-1.amazonaws.com/small_fjord_hotel_compressed_6917b2188c.jpg" />
        <div className={styles.description}>
          <div className={styles.description__heading}>Fjord Hotel</div>
          <div className={styles.description__address}>
            Vågsallmenningen 1, 5014 Bergen
          </div>
        </div>
      </div>
    </div>
  );
}
