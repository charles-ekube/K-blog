import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom'
// import '../SignUp/signup.css';
import { registerUser, useAuthState, useAuthDispatch } from '../../../Context' 



const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
    // const history = useHistory();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			let response = await registerUser(dispatch, { name, email, password });
            // console.log(response)
			if (!response) return;
                // history.push('/admin');
            
		} catch (error) {
			console.log(error);
		}
	};

    return (
        <>
        <section className='main-form-container'>
            <section className='signup-header'>
                <h2>Sign Up</h2>
            </section>
            <section className='signup-form-container'>
                <form onSubmit={handleSignUp}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Business Name</label>
                        <input 
                         type="text" 
                         placeholder="Enter Business Name"
                         value={name}  
                         onChange={(e) => setName(e.target.value)}
                         name="name"
                         id="name"
                         class="form-control" 
                         aria-describedby="nameHelp"/>
                        <div id="nameHelp" class="form-text">Please enter a valid name</div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input 
                         type="email" 
                         placeholder="Enter Email"
                         value={email}  
                         onChange={(e) => setEmail(e.target.value)}
                         name="email"
                         id="email"
                         class="form-control" 
                         aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">Please enter a valid email</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"                        
                        class="form-control"
                        aria-describedby="passwordHelp"/>
                        <div id="passwordHelp" class="form-text">Password must be more than 6 characters</div>
                    </div>
                    
                    <button 
                      type="submit"
                      variant="primary"
                      className="signup-btn"
                      class='btn btn-primary'
                      disabled={loading}
                    >
                      Sign Up
                    </button>
                </form>
            </section>
        </section>    
        </>
    )
}

export default SignUp;
