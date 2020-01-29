import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';

const Pager = ({ count })=> {
  const pages = new Array(Math.round(count/50)).fill('').map( (_, idx)=> {
    return {
      text: idx + 1,
      idx
    };
  });
  return (
    <nav>
      {
        pages.map( page => {
          return (
            <a key={ page.idx } href={`#view=users&idx=${page.idx}`}>
              { page.text }
            </a>
          );
        })
      }
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
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.email }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};


export default Users;
