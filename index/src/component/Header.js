// Header.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      {/* ... */}
      <div class="container px-5">
                    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">INALAB </span></a> 
                    {/* (Information Networking and Applications) */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="resume.html">メンバー紹介</a></li>
                            <li class="nav-item"><a class="nav-link" href="projects.html">アクセス</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">卒業メンバー</a></li>
                            <a class="btn btn-primary btn-lg px-3 py-1 me-sm-2 fs-10 fw-bolder" href="Login.html">Login</a>
                            <Button variant="outline-primary">Sign up</Button>{' '}
                        </ul>
                    </div>
                </div>
    </nav>
  );
}

export default Header;
