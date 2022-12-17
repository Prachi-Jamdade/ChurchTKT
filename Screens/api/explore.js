import {getAPIWithToken} from './axios';


async function generatePayment({amount,name,phoneNumber,email}) {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/payment/pay_order',
        {
            'amount':amount,
            'Name':name,
            'PhoneNumber':phoneNumber,
            'Email':email
        }
	);
	return res.data;
}

async function completePayment({razorpay_payment_id,razorpay_order_id,razorpay_signature}) {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/payment/complete_order',
        {
            'razorpay_payment_id':razorpay_payment_id,
           'razorpay_order_id'   :razorpay_order_id,
           'razorpay_signature':razorpay_signature
        }
	);
	return res.data;
}


async function generatePaymentSPM({amount,name,phoneNumber,email}) {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/spmpayment/pay_order',
        {
            'amount':amount,
            'Name':name,
            'PhoneNumber':phoneNumber,
            'Email':email
        }
	);
	return res.data;
}

async function completePaymentSPM({razorpay_payment_id,razorpay_order_id,razorpay_signature}) {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.post(
		'/spmpayment/complete_order',
        {
            'razorpay_payment_id':razorpay_payment_id,
           'razorpay_order_id'   :razorpay_order_id,
           'razorpay_signature':razorpay_signature,
        }
	);
	return res.data;
}



async function testimonyTypes() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/testmonies/types',
	);
	return res.data;
}

async function testimoniesList() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/testmonies/all/1',
	);
	return res.data;
}

async function eventsSPM() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/events/all',
	);
	return res.data;
}
async function getDailyDose() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/daily_manna/active',
	);
	return res.data;
}

async function todayWord() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/broadcasting/word',
	);
	return res.data;
}
async function getLiveEvent() {
	const APIWithToken=await getAPIWithToken();
	const res = await APIWithToken.get(
		'/broadcasting/live',
	);
	return res.data;
}


export {
    generatePayment,
    completePayment,
    testimonyTypes,
    testimoniesList,
    eventsSPM,
    completePaymentSPM,
    generatePaymentSPM,
    getLiveEvent,
    todayWord,
	getDailyDose,
};


