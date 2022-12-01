import {API,APIWithToken} from './axios';


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
	const res = await APIWithToken.post(
		'/account/user/' + userId
	);
	return res.data;
}



export {sendOtpToNumber,loginOtpVerification,sigUpOtpVerification,getProfileDetails};


