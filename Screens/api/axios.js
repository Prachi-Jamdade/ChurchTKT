import axios from 'axios';

const baseUrl = 'https://connect.tktchurch.com/api';

const API = axios.create({ baseURL: baseUrl });
const APIWithToken = axios.create({ baseURL: baseUrl });

APIWithToken.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer `;
  // req.headers.adminkey = process.env.password;
    return req;
});


export {API,APIWithToken};
