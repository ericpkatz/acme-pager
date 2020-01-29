import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUsers = (idx)=> {
  return axios.get(`${API}/users/${ idx || ''}`)
    .then( response => response.data);
};

export { fetchUsers };
