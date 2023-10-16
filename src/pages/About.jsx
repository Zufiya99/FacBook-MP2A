function About() {
  return (

      <div className="card-inner animated active" id="about-card">
        <div className="card-wrap">
          <div className="content about">
            <div className="title">About Me</div>
            {/* content */}
            <div className="row">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="text-box">
                  <p>
                    I am Ryan Adlard, web designer from USA, California. I have
                    rich experience in web site design and building and
                    customization, also I am good at wordpress. I love to talk
                    with you about our unique.
                  </p>
                </div>
              </div>
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Age . . . . .</strong> 24
                    </li>
                    <li>
                      <strong>Residence . . . . .</strong> USA
                    </li>
                    <li>
                      <strong>Freelance . . . . .</strong> Available
                    </li>
                    <li>
                      <strong>Address . . . . .</strong> California, USA
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          {/*
                      Services
                  */}
          <div className="content services">
            {/* title */}
            <div className="title">My Services</div>
            {/* content */}
            <div className="row service-items border-line-v">
              {/* service item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="fa fa-code" />
                  </div>
                  <div className="name">
                    <span>Web Development </span>
                  </div>
                  <div className="desc">
                    <div>
                      <p>
                        Modern and mobile-ready website that will help you reach
                        all of your marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* service item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="fa fa-music" />
                  </div>
                  <div className="name">
                    <span>Music Writing </span>
                  </div>
                  <div className="desc">
                    <div>
                      <p>
                        Music copying, writing, creating, transcription,
                        arranging and composition services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* service item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="fa fa-buysellads" />
                  </div>
                  <div className="name">
                    <span>Advetising </span>
                  </div>
                  <div className="desc">
                    <div>
                      <p>
                        Advertising services include television, radio, print,
                        mail, and web apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* service item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="fa fa-gamepad" />
                  </div>
                  <div className="name">
                    <span>Game Development </span>
                  </div>
                  <div className="desc">
                    <div>
                      <p>
                        Developing memorable and unique mobile android, ios and
                        video games.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
          {/*
                      Price Tables
                  */}
          <div className="content pricing">
            {/* title */}
            <div className="title">Pricing</div>
            {/* content */}
            <div className="row pricing-items">
              {/* pricing item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="pricing-item">
                  <div className="icon">
                    <i className="fa fa-battery-half" />
                  </div>
                  <div className="name">Basic</div>
                  <div className="amount">
                    <span className="dollar">$</span>
                    <span className="number">22</span>
                    <span className="period">hour</span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li className="disable">Music Writing</li>
                      <li className="disable">
                        Photography <strong>new</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="lnks">
                    <a href="#" className="lnk">
                      <span className="text">Buy Basic</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* pricing item */}
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="pricing-item">
                  <div className="icon">
                    <i className="fa fa-battery-full" />
                  </div>
                  <div className="name">Pro</div>
                  <div className="amount">
                    <span className="dollar">$</span>
                    <span className="number">48</span>
                    <span className="period">hour</span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li>Music Writing</li>
                      <li>
                        Photography <strong>new</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="lnks">
                    <a href="#" className="lnk">
                      <span className="text">Buy Pro</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          {/*
                      Fun Fact
                  */}
          <div className="content fuct">
            {/* title */}
            <div className="title">Fun Fact</div>
            {/* content */}
            <div className="row fuct-items">
              {/* fuct item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="fuct-item">
                  <div className="icon">
                    <span className="fa fa-music" />
                  </div>
                  <div className="name">80 Albumes Listened</div>
                </div>
              </div>
              {/* fuct item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="fuct-item">
                  <div className="icon">
                    <span className="fa fa-trophy" />
                  </div>
                  <div className="name">15 Awards Won</div>
                </div>
              </div>
              {/* fuct item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="fuct-item">
                  <div className="icon">
                    <span className="fa fa-coffee" />
                  </div>
                  <div className="name">1 000 Cups of coffee</div>
                </div>
              </div>
              {/* fuct item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="fuct-item">
                  <div className="icon">
                    <span className="fa fa-flag" />
                  </div>
                  <div className="name">10 Countries Visited</div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          {/*
                      Clients
                  */}
          <div className="content clients">
            {/* title */}
            <div className="title">Clients</div>
            {/* content */}
            <div className="row client-items">
              {/* client item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="client-item">
                  <div className="image">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/"
                    >
                      <img src="assets/images/clients/client_1.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              {/* client item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="client-item">
                  <div className="image">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/"
                    >
                      <img src="assets/images/clients/client_2.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              {/* client item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="client-item">
                  <div className="image">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/"
                    >
                      <img src="assets/images/clients/client_3.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              {/* client item */}
              <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                <div className="client-item">
                  <div className="image">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/"
                    >
                      <img src="assets/images/clients/client_4.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          {/* Quote */}
          <div className="content quote">
            {/* title */}
            <div className="title">
              <span>Quote</span>
            </div>
            {/* content */}
            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="revs-item">
                  <div className="text">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="assets/images/profile.png" alt="Ryan Adlard" />
                    </div>
                    <div className="info">
                      <div className="name">Ryan Adlard</div>
                      <div className="company">Web Designer</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
