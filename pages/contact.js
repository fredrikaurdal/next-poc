import Navbar from '../components/navbar/MainNavbar';
import Form from '../components/inputs/Form';
import styles from '../styles/sass/pages/Contact.module.scss';

export default function Hotels() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Form formType={'contact'} />
      </div>
    </>
  );
}
