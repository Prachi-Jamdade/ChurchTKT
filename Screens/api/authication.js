import axios from 'axios';

const baseUrl = 'https://connect.tktchurch.com/api';

async function login(phoneNumber) {
	const res = await axios.post(
		baseUrl + '/communication/otp',
		{
            'to':phoneNumber,
            'isLogin':true,
        }
	);
	return res.data;
}

async function loginOtpVerification(phoneNumber,otp) {
	const res = await axios.post(
		baseUrl + '/account/login_with_otp',
		{
            'phonenumber':phoneNumber,
            'otp':otp,
            'IsLogin':true,
        }
	);
	return res.data;
}


export {login,loginOtpVerification};


