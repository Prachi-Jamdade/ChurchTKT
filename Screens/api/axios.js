import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://connect.tktchurch.com/api';
// const baseUrl = 'http://bb3c-103-251-57-129.in.ngrok.io/api';


const API = axios.create({ baseURL: baseUrl });


const getAPIWithToken = async () => {
  const APIWithToken = axios.create({ baseURL: baseUrl });
  
  APIWithToken.interceptors.request.use(async (req) => {
      const value = await AsyncStorage.getItem('user');
      let objToken=JSON.parse(value);
      let authToken ="";
      let {token} = objToken;
      authToken=token;
      req.headers.Authorization = `Bearer ${authToken}`;
      return req;
  })
  return APIWithToken;
};



export {API,getAPIWithToken,baseUrl};
