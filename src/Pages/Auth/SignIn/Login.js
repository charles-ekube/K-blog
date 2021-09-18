import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom'
// import '../SignUp/signup.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../../Context' 


const Login = (props) => {
    
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
    // const history = useHistory();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { email, password });
            // console.log(response)
			if (!response) return;
                // history.push('/dashboard');
            
		} catch (error) {
			console.log(error);
		}
	};


return (
    <>
    <section className='main-form-container'>
        <section className='signup-header'>
            <h2>Login</h2>
        </section>
        <section className='signup-form-container'>
            <form onSubmit={handleLogin}>
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
                   
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange ={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    class="form-control"
                    aria-describedby="passwordHelp"/>
                
                </div>
                
                <button 
                  type="submit"
                  variant="primary"
                  className="signup-btn"
                  class='btn btn-primary'
                  disabled={loading}
                >
                  Login
                </button>
            </form>
        </section>
    </section>    
    </>
)


}

export  default Login;