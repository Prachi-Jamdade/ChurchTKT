import {API,getAPIWithToken,baseUrl} from './axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

async function sendOtpToNumber(phoneNumber,isLogin) {
	const res = await API.post(
		'/communication/otp',
		{
            'to':phoneNumber,
            'isLogin':isLogin,
        }
	);
	return res.data;
}

async function loginOtpVerification(phoneNumber,otp) {
	const res = await API.post(
		'/account/login_with_otp',
		{
            'phonenumber':phoneNumber,
            'otp':otp,
            'IsLogin':true,
        }
	);
	return res.data;
}
async function sigUpOtpVerification(phoneNumber,firstName,lastName,otp) {
	const res = await API.post(
		'/account/signup_with_otp',
		{
            'phonenumber':phoneNumber,
			'FirstName':firstName,
			'LastName':lastName,
            'otp':otp,
        }
	);
	return res.data;
}

async function getProfileDetails(userId) {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/account/user/' + userId
	);
	return res.data;
}

async function updateUserData(data) {
	// const APIWithToken=await getAPIWithToken();
	// const res = await APIWithToken.put(
	// 	'/account/user/update',
	// 	data
	// );
	const value = await AsyncStorage.getItem('user')
	let objToken=JSON.parse(value);
	let {token} = objToken;
	let authToken =token;

	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${authToken}` },
		body: JSON.stringify(data)
	};
	
	const res_data=await fetch(baseUrl+'/account/user/update', requestOptions).then(response => response.json())
	console.log(res_data);
	return res_data;
}



export {sendOtpToNumber,loginOtpVerification,sigUpOtpVerification,getProfileDetails,updateUserData};


