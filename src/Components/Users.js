import React from 'react';
const users = ({ users, getUsers }) => {
  return (
    <div>
      {users.map((user, i) => (
        <ul key={i} className='list'>
          <li className='user-names'>
            <a href='/#' onClick={() => getUsers(i)}>
              {user.name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default users;
