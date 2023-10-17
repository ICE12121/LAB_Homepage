// login.js
import React from 'react';

function Login() {
    return (
       <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                <h1 class="display-5 fw-bolder"><span class="text-gradient d-inline">Log in</span></h1>
                                    {/* <h3 class="h4 font-weight-bold text-theme"></h3> */}
                                </div>
                                <h6 class="h5 mb-0">INALAB</h6>
                                <div class="badge bg-gradient-primary-to-secondary text-white mb-4"><div class="text-uppercase">Design &middot; Development &middot; Testing</div></div>
                                {/* <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}

                                <form>
                                <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" />
</div>
<div class="form-group mb-5">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
</div>

                        <div class="row justify-content-center my-3 px-3">
                            <button class="btn-block btn-color">Login</button>
                        </div>
                                    {/* <button type="submit" class="btn btn-theme">Login</button> */}
                                    {/* <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a> */}
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    <h4 class="text-white mb-4">Welcome to INALAB!</h4>
                                    <p class="lead text-white">"Empowering Tomorrow's Connectivity: From Mesh to Mind."</p>
                                    <p>- INALAB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}

            {/* <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" class="text-primary ml-1">register</a></p> */}

            {/* <!-- end row --> */}

        </div>
        {/* <!-- end col --> */}
    </div>
    {/* <!-- Row --> */}
</div>
    );
}

export default Login;