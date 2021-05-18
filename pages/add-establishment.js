import Head from 'next/head';
import Layout from '../components/layouts/DashboardLayout';
import Form from '../components/inputs/Form';

export default function AddEstablishment() {
  return (
    <>
      <Head>
        <title>Add Establishment</title>
      </Head>
      <Layout>
        <Form formType={'add-establishment'} style={'top-margin'} />
      </Layout>
    </>
  );
}
