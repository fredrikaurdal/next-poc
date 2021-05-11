import styles from '../../styles/sass/components/input/Autocomplete.module.scss';
import Link from 'next/link';

export default function Autocomplete({ results }) {
  console.log('results:', results);
  return (
    <div
      className={`${styles.autocomplete} ${results.length < 1 && styles.hide}`}
    >
      {results.map((result) => (
        <Link href={'hotel/' + result.id}>
          <div className={styles.result} key={result.id}>
            <img src={result.Image[0].formats.thumbnail.url} />
            <div className={styles.description}>
              <div className={styles.description__heading}>{result.Name}</div>
              <div className={styles.description__address}>
                {result.Address}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
