import {getAPIWithToken} from './axios';


async function getAllHomeEvent() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/events/all',
	);
	return res.data;
}


export {getAllHomeEvent};


