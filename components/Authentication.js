import { useEffect, useState } from 'react';
import Messages from '../pages/messages';

export default function Authentication() {
  const [token, setToken] = useState();

  useEffect(() => {
    const jwt = getFromStorage('token');

    setToken(jwt);
  });
  return (
    <>
      <Messages token={token} />
    </>
  );
}
