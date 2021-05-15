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
