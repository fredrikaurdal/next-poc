import styles from '../../styles/sass/components/input/HomeSearch.module.scss';
import Autocomplete from '../../components/input/Autocomplete';
import { useState, useEffect } from 'react';

export default function HomeSearch({ hotels }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (input) => {
    setQuery(input);
  };

  useEffect(() => {
    console.log('query:', query);

    const filterHotels = hotels.filter((hotel) =>
      hotel.Name.toLowerCase().includes(query.toLowerCase())
    );

    setResult(filterHotels);
  }, [query]);

  // console.log('hotels:', result);

  return (
    <div className={styles.homesearch}>
      <input
        className={styles.input}
        placeholder="Enter hotel name"
        onChange={(e) => handleChange(e.target.value)}
      />
      <Autocomplete results={result} />
    </div>
  );
}
