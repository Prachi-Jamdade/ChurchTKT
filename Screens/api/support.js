import {APIWithToken} from './axios';


async function putQuestions(Question,Type) {
	const res = await APIWithToken.post(
		'/questions_answers/create',
        {Question,Type}
	);
	return res.data;
}


export {putQuestions};


