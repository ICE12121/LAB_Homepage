// login.js
import React, { useState } from 'react'; // Don't forget to import useState
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your authentication context


function Login() {
    const HARDCODED_CREDENTIALS = {
        username: 'admin',
        password: 'fitfit'
    }
        // For navigation after successful login
        const navigate = useNavigate();

        // Local state to handle the input values
        const [loginInfo, setLoginInfo] = useState({
            username: '',
            password: ''
        });
        const [loginError, setLoginError] = useState('');
        const { login } = useAuth(); // using login method from auth context
    
        // This method will handle the form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
            // Check if the credentials match the hardcoded ones
    if (loginInfo.username === HARDCODED_CREDENTIALS.username && loginInfo.password === HARDCODED_CREDENTIALS.password) {
        // If they match, "log in"
        login({ name: loginInfo.username }); // passing user information

        console.log('Login successful.');
        navigate('/Admin_homepage'); // navigate only if credentials are correct
    } else {
        // If credentials don't match, set an error message
        setLoginError('Invalid username or password. Please try again.');
    }
            // Check if the credentials match the hardcoded ones
            // if (loginInfo.username === HARDCODED_CREDENTIALS.username && loginInfo.password === HARDCODED_CREDENTIALS.password) {
            //     try {
            //         // If they match, call the login function from your Auth context
            //         const success = await login(); // login should be a function that sets your authentication context
                    
            //         if (success) {
            //             console.log('Login successful.');
            //             navigate('/Admin_homepage'); // Navigate to admin homepage on successful login
            //         } else {
            //             console.error('Login failed. Please check your credentials.');
            //             setLoginError('Invalid username or password. Please try again.');
            //         }
            //     } catch (error) {
            //         console.error('An error occurred during login:', error);
            //         // Here, handle UI updates for displaying the error to the user
            //     }
            // } else {
            //     // If credentials don't match, set an error message
            //     setLoginError('Invalid username or password. Please try again.');
            // }
        };
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setLoginInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

    return (
        
       <div id="main-wrapper" className="container">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="mb-5">
                                <h1 className="display-5 fw-bolder"><span className="text-gradient d-inline">Log in</span></h1>
                                    {/* <h3 className="h4 font-weight-bold text-theme"></h3> */}
                                </div>
                                <h6 className="h5 mb-0">INALAB</h6>
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Testing</div></div>
                                {/* <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                                <form onSubmit={handleSubmit}>
    {/* ... input fields ... */}
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input 
            type="text"
            className="form-control" 
            id="exampleInputEmail1"
            name="username"
            value={loginInfo.username}
            onChange={handleChange}
        />
    </div>
    <div className="form-group mb-5">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
        />
    </div>

    {/* Display the error message here */}
    {loginError && <div className="alert alert-danger" role="alert">{loginError}</div>}

    <div className="row justify-content-center my-3 px-3">
        <button type="submit" className="btn-block btn-color">Login</button>
    </div>
</form>


                                
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className="account-block rounded-right">
                                <div className="overlay rounded-right"></div>
                                <div className="account-testimonial">
                                    <h4 className="text-white mb-4">Welcome to INALAB!</h4>
                                    <p className="lead text-white">"Empowering Tomorrow's Connectivity: From Mesh to Mind."</p>
                                    <p>- INALAB</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}

            {/* <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" className="text-primary ml-1">register</a></p> */}

            {/* <!-- end row --> */}

        </div>
        {/* <!-- end col --> */}
    </div>
    {/* <!-- Row --> */}
</div>
    );
}

export default Login;