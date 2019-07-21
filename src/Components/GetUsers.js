import React from 'react';

const getUser = ({ getUsers }) => (
  <div className='get-user'>
    {' '}
    <button onClick={getUsers}>Get Users!</button>
  </div>
);
export default getUser;
