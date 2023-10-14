import React from 'react';

const Profile = () => {
  return (
    <div className="card-started" id="home-card">
      <div className="profile no-photo">
        <div className="slide" style={{ backgroundImage: 'url(../src/assets/react.svg)' }}></div>
        <div className="title">Ryan Adlard</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Web Designer</p>
            <p>Developer</p>
            <p>Freelancer</p>
          </div>
        </div>
        <div className="social">
          <a target="_blank" href="https://dribbble.com/"><span className="fa fa-dribbble"></span></a>
          <a target="_blank" href="https://twitter.com/"><span className="fa fa-twitter"></span></a>
          <a target="_blank" href="https://github.com/"><span className="fa fa-github"></span></a>
          <a target="_blank" href="https://www.spotify.com/"><span className="fa fa-spotify"></span></a>
          <a target="_blank" href="https://stackoverflow.com/"><span className="fa fa-stack-overflow"></span></a>
        </div>
        <div className="lnks">
          <a href="#" className="lnk">
            <span className="text">Download CV</span>
          </a>
          <a href="#" className="lnk discover">
            <span className="text">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
