import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';

const Pager = ({ count, idx })=> {
  const _idx = idx;
  const pages = new Array(Math.round(count/50)).fill('').map( (_, idx)=> {
    return {
      text: idx + 1,
      idx,
      selected: (!_idx && idx === 0) || _idx*1 === idx
    };
  });
  return (
    <nav className='pager'>
      {
        pages.map( page => {
          return (
            <a key={ page.idx } href={`#view=users&idx=${page.idx}`} className={ page.selected ? 'selected': ''}>
              { page.text }
            </a>
          );
        })
      }
    </nav>
  );
};

const Users = ({ idx })=> {
  const [users, setUsers] = useState([]);
  const [ count, setCount] = useState(0);

  useEffect(()=> {
    fetchUsers(idx)
      .then( response => {
        setUsers(response.users);
        setCount(response.count);
      }); 
  }, [idx]);
  return (
    <div>
      <Pager count={ count } idx={ idx }/>
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
