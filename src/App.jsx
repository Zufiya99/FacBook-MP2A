import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contacts from './Components/Contacts';
import Profile from './Components/Profile';
import Resume from './Components/Resume';
import Works from './Components/Works';
import Error from './Components/Error';

const App = () => {
  return (
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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
