import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://connect.tktchurch.com/api';
// const baseUrl = 'http://bb3c-103-251-57-129.in.ngrok.io/api';


const API = axios.create({ baseURL: baseUrl });
const APIWithToken = axios.create({ baseURL: baseUrl });


const getAPIWithToken = async () => {
  const value = await AsyncStorage.getItem('user')
  console.log(value);
  const {token} = JSON.parse(value);
  APIWithToken.interceptors.request.use((req) => {
      req.headers.Authorization = `Bearer ${token}`;
      return req;
  });
  return APIWithToken;
};



export {API,getAPIWithToken};
