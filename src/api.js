import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUsers = ()=> {
  return axios.get(`${API}/users`)
    .then( response => response.data);
};

export { fetchUsers };
