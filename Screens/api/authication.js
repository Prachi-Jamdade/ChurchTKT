import axios from 'axios';

const baseUrl = 'https://connect.tktchurch.com/api';

async function sendOtpToNumber(phoneNumber,isLogin) {
	const res = await axios.post(
		baseUrl + '/communication/otp',
		{
            'to':phoneNumber,
            'isLogin':isLogin,
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
async function sigUpOtpVerification(phoneNumber,firstName,lastName,otp) {
	const res = await axios.post(
		baseUrl + '/account/signup_with_otp',
		{
            'phonenumber':phoneNumber,
			'FirstName':firstName,
			'LastName':lastName,
            'otp':otp,
        }
	);
	return res.data;
}


export {sendOtpToNumber,loginOtpVerification,sigUpOtpVerification};


