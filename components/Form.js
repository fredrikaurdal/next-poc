import styles from '../styles/sass/components/Form.module.scss';
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { BASE_URL } from '../constants/api';

export default function Form({ token, formType, id }) {
  const [file, setFile] = useState();
  const [status, setStatus] = useState(null);
  const [validation, setValidation] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log('event.target.files: ', event.target.files);

    setFile(event.target.files[0]);
  };

  const submitEnquiry = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formNodes = event.target.childNodes;

    const formData = new FormData();

    const data = {};

    for (let i = 0; i < formNodes.length; i++) {
      const currentNode = formNodes[i];
      console.log('currentNode', currentNode);
      if (
        currentNode.attributes['type'] === undefined ||
        !['submit', 'file'].includes(currentNode.attributes['type'].value)
      ) {
        data[currentNode.name] = currentNode.value;
      } else if (currentNode.attributes['type'].value === 'file') {
        if (currentNode.files.length === 1) {
          formData.append(`files.${currentNode.name}`, file, file.name);
        }
      }
    }

    console.log('data', data);

    formData.append('data', JSON.stringify(data));

    console.log(formData);

    let res;

    if (formType === 'add-establishment') {
      res = await fetch(BASE_URL + 'hotels', {
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
      });
    } else if (formType === 'contact') {
      res = await fetch(BASE_URL + 'messages', {
        body: JSON.stringify({
          Subject: event.target.Subject.value.trim(),
          Name: event.target.Name.value.trim(),
          Email: event.target.Email.value.trim(),
          Message: event.target.Message.value.trim(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    } else if (formType === 'enquiry') {
      res = await fetch(BASE_URL + 'enquiries', {
        body: JSON.stringify({
          Name: event.target.Name.value.trim(),
          Email: event.target.Email.value.trim(),
          Phone_number: event.target.Phone_number.value.trim(),
          Hotel_id: id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    }

    const response = await res;
    const json = await res.json();

    setStatus(response.status);

    setTimeout(function () {
      setStatus(null);
      setLoading(false);
    }, 3000);

    console.log('response.status', response.status);
    console.log(json);

    if (json.data && json.data.errors) {
      setValidation(json.data.errors);
      console.log(json.data.errors);
    }

    if (response.status === 200) {
      event.target.reset();
      setValidation({});
    }
  };

  return (
    <>
      <div
        className={`${styles.form_wrapper} ${
          formType === 'contact' && styles.top_margin
        }`}
      >
        <form onSubmit={submitEnquiry} className={styles.form}>
          {formType === 'add-establishment' && (
            <>
              <Input
                placeholder={'Name *'}
                name="Name"
                error={validation['Name']}
              />
              <Input
                placeholder={'Description *'}
                name="Description"
                error={validation['Description']}
                textarea={true}
              />
              <Input
                placeholder={'Rating *'}
                name="Rating"
                error={validation['Rating']}
              />
              <Input
                placeholder={'Price *'}
                name="Price"
                type="number"
                error={validation['Price']}
              />
              <Input
                placeholder={'Address *'}
                name="Address"
                error={validation['Address']}
              />
              <Input
                placeholder={'Image *'}
                name="Image"
                error={validation['Image']}
                type="file"
                onChange={handleChange}
                required={true}
              />
            </>
          )}

          {formType === 'contact' && (
            <>
              <Input
                placeholder={'Subject *'}
                name="Subject"
                error={validation['Subject']}
              />
              <Input
                placeholder={'Name *'}
                name="Name"
                error={validation['Name']}
              />
              <Input
                placeholder={'Email *'}
                name="Email"
                type="email"
                error={validation['Email']}
              />
              <Input
                placeholder={'Message *'}
                name="Message"
                error={validation['Message']}
                textarea={true}
              />
            </>
          )}

          {formType === 'enquiry' && (
            <>
              <Input
                placeholder={'Name *'}
                name="Name"
                error={validation['Name']}
              />
              <Input
                placeholder={'Email *'}
                name="Email"
                type="email"
                error={validation['Email']}
              />
              <Input
                placeholder={'Phone number *'}
                name="Phone_number"
                type="number"
                error={validation['Phone_number']}
              />
            </>
          )}
          <Button value="Send" style={['button__input_submit']} input={true} />
          <Validation status={status} loading={loading} />
        </form>
      </div>
    </>
  );
}
