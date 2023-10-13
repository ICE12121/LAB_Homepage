import './App.css';
import React from 'react';
// import Navbar from './component/Navbar.js';
import Header from './component/Header';
import Footer from './component/Footer';
import MainContent from './component/MainContent';
import ProfilePicture from './component/ProfilePicture';
// src/
// ├── components/
// │   ├── Header.js
// │   ├── ProfilePicture.js
// │   ├── MainContent.js
// │   ├── Footer.js
// ├── App.js
// └── index.js

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="d-flex flex-column h-100">
      <Header />
      <main className="flex-shrink-0">
        <ProfilePicture />
        {/* <MainContent /> */}
      </main>
      <Footer />
    </div>
    </div>
  
  );
}

export default App;
