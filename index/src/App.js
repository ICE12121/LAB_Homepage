import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Member from "./component/Member";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProfilePicture from "./component/ProfilePicture";
import Lablocal from "./component/Labloca";
import News from "./component/News";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <Header />

        <main className="flex-shrink-0">
          {/* Setup Routes */}
          <Routes>
            <Route path="/" element={<ProfilePicture />} />
            <Route path="/member" element={<Member />} />
            <Route path="/Labloca" element={<Lablocal />} />
            <Route path="/News" element={<News />} />

            {/* Route for NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
