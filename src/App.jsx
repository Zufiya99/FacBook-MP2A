import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacts from './Components/Contacts';
import Profile from './Components/Profile';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Resume from './Components/Resume';
import Works from './Components/Works';
import Error from './Components/Error';
import "./App.css";


const App = () => {
  return (
    <>
      <div className="home-page">
        <Router>
          <nav>
            <ul>
              <li>
            <Link to="/">About</Link>
          </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              {/* <li>
            <Link to="/profile">Profile</Link>
          </li> */}
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
            </ul>
          </nav>
        <Profile />


          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>

  );
};

export default App;
