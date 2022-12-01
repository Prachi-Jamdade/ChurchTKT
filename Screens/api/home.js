import {APIWithToken} from './axios';


async function getAllHomeEvent() {
	const res = await APIWithToken.get(
		'/events/all',
	);
	return res.data;
}



export {getAllHomeEvent};


