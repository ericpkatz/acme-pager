import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';

const Pager = ()=> {
  return (
    <nav>
      <a href='#view=users&idx=0'>1</a>
      <a href='#view=users&idx=1'>2</a>
    </nav>
  );
};

const Users = ()=> {
  const [users, setUsers] = useState([]);
  const [ count, setCount] = useState(0);

  useEffect(()=> {
    fetchUsers()
      .then( response => {
        setUsers(response.users);
        setCount(response.count);
      }); 
  }, []);
  return (
    <div>
      <Pager count={ count } />
      Users ({ users.length})
    </div>
  );
};


export default Users;
