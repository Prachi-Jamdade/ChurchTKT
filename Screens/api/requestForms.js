import {getAPIWithToken} from './axios';




async function postBirthdayForm(
	{
		formType,
	    name,
		fatherName,
		motherName,
		phoneNumber,
		address,
		eventDate,
		eventTime
	}){
		const data = await postBirthdayForm({formType,name,fatherName,motherName,phoneNumber,address,eventDate,eventTime});
		return data;
	}
	
async function sendFom(data){
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/communication/create_userform',
		data);
	return res.data;

}

export {postBirthdayForm};


