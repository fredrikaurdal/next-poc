import { BASE_URL } from '../constants/api';
import Layout from '../components/layouts/DashboardLayout';
import EnquiriesCard from '../components/cards/EnquiriesCard';

export default function Enquiries({ hotelData }) {
  return (
    <>
      <Layout>
        <EnquiriesCard hotelData={hotelData} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(BASE_URL + 'hotels');
  console.log('BASE_URL', BASE_URL);
  const hotelData = await res.json();

  if (!hotelData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { hotelData },
  };
}
