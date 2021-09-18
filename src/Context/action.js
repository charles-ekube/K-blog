const ROOT_URL = 'https://campsms-v1.herokuapp.com/api/v1/auth';


export async function registerUser(dispatch, signupPayload) {

	const requestOptions = {
		method : 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(signupPayload),
	};

	try {
		dispatch({type: 'REQUEST_SIGNUP'});
		const response = await fetch(`${ROOT_URL}/register`, requestOptions);
		const data =  await response.json();
		
		if(data.token) {
			dispatch({type: 'SIGNUP_SUCCESS', payload: data});
			localStorage.setItem('currentUser', JSON.stringify(data));
			console.log(data);
			
			return  data;
		}
		if(data.error === 'Duplicate field value entered') {
			alert(data.error);
		}

		dispatch({ type: 'SIGNUP_ERROR', error: data.error[0] });
		// console.log(data.error[0]);
		return;

	} catch (error) {
		dispatch({ type: 'SIGNUP_ERROR', error: error });
		alert(error)
		// console.log(error);	
	}
}

export async function loginUser(dispatch, loginPayload) {
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		const response = await fetch(`${ROOT_URL}/login`, requestOptions);
		const data = await response.json();
		// console.log(data);

		if (data.token) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			 
			localStorage.setItem('currentUser', JSON.stringify(data));
			
			console.log(data)
			return data;
		}
        if(data.error === 'Invalid credentials') {
            alert('check password or email')
            console.log(data.error)
        }
		if(data.isEmailConfirmed === false ) {
			alert('Email not verified')
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.error[0] });
		console.log(data.status);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}