import Layout from '../components/layouts/Dashboard';
import Form from '../components/inputs/Form';

export default function AddEstablishment() {
  return (
    <>
      <Layout>
        <Form formType={'add-establishment'} style={'top-margin'} />
      </Layout>
    </>
  );
}
