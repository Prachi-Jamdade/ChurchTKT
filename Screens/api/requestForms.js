import {getAPIWithToken} from './axios';

async function sendFom(data){
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/communication/create_userform',
		data
	);
	return res.data;

}

export {sendFom};


