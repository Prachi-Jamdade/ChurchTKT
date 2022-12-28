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
    
      if(!objToken || objToken=='null'){
        console.log(authToken,121211);
        authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3IiwibmFtZSI6IlVzZXJMb2dpbiIsIm5iZiI6MTY2OTYwMTczNiwiZXhwIjoxNjcyMTkzNzM2LCJpYXQiOjE2Njk2MDE3MzZ9.8RJZUSRnin0RJmvO8FrwQJRwaQQeaZEWEm1CZSHo2NM";
      }else{
        let {token} = objToken;
        authToken=token;
      }
      req.headers.Authorization = `Bearer ${authToken}`;
      console.log(req)
      return req;
  })
  console.log('call')
  return APIWithToken;
};



export {API,getAPIWithToken,baseUrl};
