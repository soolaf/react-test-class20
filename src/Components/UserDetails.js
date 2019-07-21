import React from 'react';

const userDetails = ({ userId, users }) => {
  if (userId >= 0) {
    const user = users[userId];

    return (
      <div className='details'>
        <img className='img' src={user.photo} alt={user.name} />
        <div className='user-details'>
          <h2>{user.name + ' ' + user.surname}</h2>
          <ul>
            <li> Email: {user.email}</li>
            <li> Gender: {user.gender}</li>
            <li> Age: {user.age}</li>
            <li> Country of origin: {user.region} </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div className='details'>No user to show yet...</div>;
  }
};

export default userDetails;
