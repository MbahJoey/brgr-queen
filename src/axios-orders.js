import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://brgr-queen-default-rtdb.firebaseio.com/',
});

export default instance;
