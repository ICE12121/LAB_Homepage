// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      {/* ... */}
      <div className="container px-5">
                    <a className="navbar-brand" href="/"><span className="fw-bolder text-primary">INALAB </span></a> 
                    {/* (Information Networking and Applications) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item my-auto"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item my-auto"><a className="nav-link" href="/Member">メンバー紹介</a></li>
                            <li className="nav-item my-auto"><a className="nav-link" href="/Labloca">アクセス</a></li>
                            <li className="nav-item my-auto"><a className="nav-link" href="/news">お知らせ</a></li>
                            <a className="btn btn-primary btn-lg px-3 py-1 me-sm-2 fs-10 fw-bolder" href="https://voyager.ce.fit.ac.jp/fileserver/login.php">Login</a>
                            {/* <Button variant="outline-primary">Sign up</Button>{' '} */}
                        </ul>
                    </div>
                </div>
    </nav>
  );
}

export default Header;
