import styles from '../../styles/sass/components/input/HomeSearch.module.scss';
import Autocomplete from '../../components/input/Autocomplete';

export default function HomeSearch() {
  return (
    <div className={styles.homesearch}>
      <input className={styles.input} placeholder="Enter hotel name" />
      <Autocomplete />
    </div>
  );
}
