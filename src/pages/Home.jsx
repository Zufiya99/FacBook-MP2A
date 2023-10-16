function Home() {
  return (
    <div className="card-started" id="home-card">
      <div className="profile no-photo">
        <div
          className="slide"
          style={{ backgroundImage: "url(assets/images/man5_big.jpg)" }}
        />
        <div className="title">Ryan Adlard</div>
        <div className="subtitle subtitle-typed">
          <div className="typing-title">
            <p>Web Designer</p>
            <p>Developer</p>
            <p>Freelancer</p>
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
}

export default Home;
