import {getAPIWithToken} from './axios';


async function getAllHomeEvent() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/events/all',
	);
	return res.data;
}

async function getAllDaiyMana() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/daily_manna/all',
	);
	return res.data;
}


export {getAllHomeEvent,getAllDaiyMana};


