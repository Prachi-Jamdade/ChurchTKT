import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://connect.tktchurch.com/api';
// const baseUrl = 'http://bb3c-103-251-57-129.in.ngrok.io/api';


const API = axios.create({ baseURL: baseUrl });
const APIWithToken = axios.create({ baseURL: baseUrl });


const getAPIWithToken = async () => {
  const value = await AsyncStorage.getItem('user')
  console.log(value);
  // const {token} = JSON.parse(value);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3IiwibmFtZSI6IlVzZXJMb2dpbiIsIm5iZiI6MTY2OTYwMTczNiwiZXhwIjoxNjcyMTkzNzM2LCJpYXQiOjE2Njk2MDE3MzZ9.8RJZUSRnin0RJmvO8FrwQJRwaQQeaZEWEm1CZSHo2NM";
  APIWithToken.interceptors.request.use((req) => {
      req.headers.Authorization = `Bearer ${token}`;
      return req;
  });
  return APIWithToken;
};



export {API,getAPIWithToken,baseUrl};
