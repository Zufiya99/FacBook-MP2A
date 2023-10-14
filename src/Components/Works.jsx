import React from 'react';

const Works = () => {
  return (
    <div className="card-inner" id="works-card">
      <div className="card-wrap">
        <div className="content works">
          <div className="title">Recent Works</div>
          <div className="filter-menu filter-button-group">
            <div className="f_btn active">
              <label><input type="radio" name="fl_radio" value="grid-item" />All</label>
            </div>
            <div className="f_btn">
              <label><input type="radio" name="fl_radio" value="photo" />Image</label>
            </div>
            <div className="f_btn">
              <label><input type="radio" name="fl_radio" value="gallery" />Gallery</label>
            </div>
            <div className="f_btn">
              <label><input type="radio" name="fl_radio" value="video" />Video</label>
            </div>
            <div className="f_btn">
              <label><input type="radio" name="fl_radio" value="music" />Music</label>
            </div>
            <div className="f_btn">
              <label><input type="radio" name="fl_radio" value="design" />Content</label>
            </div>
          </div>
          <div className="row grid-items border-line-v">
            <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
              <div className="box-item">
                <div className="image">
                  <a href="images/works/work1.jpg" className="has-popup-image">
                    <img src="images/works/work1.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-image"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="images/works/work1.jpg" className="name has-popup-image">Motorcycle Helmet</a>
                  <div className="category">Image</div>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
              <div className="box-item">
                <div className="image">
                  <a href="https://vimeo.com/97102654" className="has-popup-video">
                    <img src="images/works/work2.jpg" alt="" />
                    <span className="info">
                      <span className="ion ion-videocamera"></span>
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="https://vimeo.com/97102654" className="name has-popup-video">Minimalism Shapes</a>
                  <div className="category">Video</div>
                </div>
              </div>
            </div>

            {/* Add more work items for music, design, gallery */}
            {/* Ensure to adjust hrefs and srcs based on your actual paths */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
