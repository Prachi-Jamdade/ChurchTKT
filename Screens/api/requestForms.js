import {getAPIWithToken} from './axios';

async function sendFom(data){
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/communication/create_userform',
		data
	);
	return res.data;

}

async function sendSPMFrom(data){
	// console.log(data);
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/spmform/create',
		data
	);
	return res.data;

}
async function getSPMFrom(id){

	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		`/spmform/get/${id}`
	);
	return res;

}

export {sendFom,sendSPMFrom,getSPMFrom};


