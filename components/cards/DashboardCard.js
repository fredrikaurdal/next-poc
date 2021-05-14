import styles from '../../styles/sass/components/cards/DashboardCard.module.scss';
import Modal from '../Modal';

export default function Card({
  name,
  title,
  description,
  date,
  onClick,
  open,
  onClose,
  message,
  enquiry,
  id,
  email,
  phone_number,
  hotels,
  hotel_id,
}) {
  const dateObject = new Date(date);

  const day = dateObject.toLocaleString('en-GB', { day: 'numeric' });
  const month = dateObject.toLocaleString('en-GB', { month: 'long' });
  const year = dateObject.toLocaleString('en-GB', { year: 'numeric' });

  let currentHotel;

  if (hotels) {
    currentHotel = hotels.filter((obj) => {
      return obj.id === hotel_id;
    });
  }

  const modal = (
    <Modal
      open={open}
      onClose={onClose}
      message={message}
      enquiry={enquiry}
      date={date}
      hotelTitle={currentHotel && currentHotel[0].Name}
    />
  );

  return (
    <>
      {open === id && modal}
      <div className={styles.card} onClick={onClick}>
        <div className={styles.card__top}>
          <div className={styles.title}>
            {hotels
              ? currentHotel[0].Name
              : title.length > 20
              ? title.substring(0, 20) + '...'
              : title}
          </div>
          {description ? (
            <div className={styles.description}>
              {description.length > 119
                ? description.substring(0, 120) + '...'
                : description}
            </div>
          ) : (
            <div className={styles.description}>
              <div>{name}</div>
              <div>{email}</div>
              <div>{phone_number}</div>
            </div>
          )}
        </div>
        <div className={styles.card__bottom}>
          <div className={styles.date}>
            {day}. {month} {year}
          </div>
        </div>
      </div>
    </>
  );
}
