import {getAPIWithToken,API} from './axios';


async function getAllHomeEvent() {
	const res = await API.get(
		'/events/all',
	);
	return res.data;
}

async function getAllDaiyMana() {
	const res = await API.get(
		'/daily_manna/all',
	);
	return res.data;
}


export {getAllHomeEvent,getAllDaiyMana};


