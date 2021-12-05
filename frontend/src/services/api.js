import axios from 'axios';

const urlapi = axios.create({
    baseURL: 'http://localhost:3000',
})

export default urlapi;

