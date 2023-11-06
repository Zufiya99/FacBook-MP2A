function Home() {
  return (
    <div className="card-started" id="home-card">
      <div className="profile no-photo">
        <div
          className="slide"
          style={{ backgroundImage: "url(assets/images/Gindi.png)" }}
        />
        <div className="title">Prof. Shrinidhi Gindi</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Assistant Professor in I.T Department</p>
            <p>Lecturer in Electronics Department</p>
            <p>Area service Manager in Akanksha Tele system</p>
          </div>
        </div>
        {/* profile socials */}
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="fa fa-dribbble" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
            <span className="fa fa-twitter" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/">
            <span className="fa fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
            <span className="fa fa-spotify" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">
            <span className="fa fa-stack-overflow" />
          </a>
        </div>

        <div className="lnks">
          <a href="https://www.mhssce.ac.in/Faculty%20Profile.php?id=268#" className="lnk" target="blank">
            <span className="text">Download CV</span>
          </a>
          <a href="https://www.linkedin.com/in/shrinidhi-gindi-96015530/" className="lnk discover" target="blank">
            <span className="text">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;