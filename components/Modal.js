import styles from '../styles/sass/components/Modal.module.scss';

export default function Modal({ open, children, onClose }) {
  console.log(open);
  if (!open) return null;

  // return ReactDom.createPortal(
  return (
    // (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>
    // ),
    // document.getElementById('portal')
  );
}
