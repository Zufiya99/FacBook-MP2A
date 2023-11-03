function Header() {
  return (

      <header className="header">
        <div className="profile">
          <div className="title">Ryan Adlard</div>
          <div className="subtitle subtitle-typed">
            <div className="typing-title">
              <p>Web Designer</p>
              <p>Developer</p>
              <p>Freelancer</p>
            </div>
          </div>
        </div>

        <a href="#" className="menu-btn">
          <span />
        </a>
        <div className="top-menu">
          <ul>
            <li className="active">
              <a href="#about-card">
                <span className="icon ion-person" />
                <span className="link">About</span>
              </a>
            </li>
            <li>
              <a href="#resume-card">
                <span className="icon ion-android-list" />
                <span className="link">Resume</span>
              </a>
            </li>
            <li>
              <a href="#works-card">
                <span className="icon ion-paintbrush" />
                <span className="link">Works</span>
              </a>
            </li>
            <li>
              <a href="#blog-card">
                <span className="icon ion-chatbox-working" />
                <span className="link">Blog</span>
              </a>
            </li>
            <li>
              <a href="#contacts-card">
                <span className="icon ion-at" />
                <span className="link">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>


  );
}

export default Header;
