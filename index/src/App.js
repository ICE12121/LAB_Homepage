import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';

import Member from './component/Member';
import Header from './component/Header';
import Footer from './component/Footer';
import ProfilePicture from './component/ProfilePicture';
import Lablocal from './component/Labloca';
import News from './component/News';
import Login from './component/Login';
import Admin_homepage from './component/Admin_homepage';

function NotFound() {
  return <div><h1><center>404 Not Found</center></h1></div>;
}

function App() {
  return (
    <AuthProvider> {/* This provider should wrap your whole application */}
    <Router>
      <div className="d-flex flex-column h-100">
        <Header />

        <main className="flex-shrink-0">
          {/* Setup Routes */}
          <Routes>
            <Route path="/" element={<ProfilePicture />} />
            <Route path="/member" element={<Member/>} />
            <Route path="/Labloca" element={<Lablocal/>} />
            <Route path="/News" element={<News/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Admin_homepage" element={<Admin_homepage/>} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
