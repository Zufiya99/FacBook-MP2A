import React from 'react';

const Blogs = () => {
  const blogItems = [
    {
      imageSrc: 'images/blog/blog1.jpg',
      date: 'April 28, 2020',
      name: 'By spite about do of allow',
      text: 'Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...',
    },
    {
      imageSrc: 'images/blog/blog1.jpg',
      date: 'April 28, 2020',
      name: 'By spite about do of allow',
      text: 'Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...',
    },
    {
      imageSrc: 'images/blog/blog1.jpg',
      date: 'April 28, 2020',
      name: 'By spite about do of allow',
      text: 'Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...',
    },
    // Add more blog items as needed
  ];

  return (
    <div className="card-inner blog" id="blog-card">
      <div className="card-wrap">
        <div className="content blog">
          <div className="title">
            <span>Blog</span>
          </div>
          <div className="row border-line-v">
            {blogItems.map((item, index) => (
              <div key={index} className="col col-d-6 col-t-6 col-m-12">
                <div className="box-item">
                  <div className="image">
                    <a href="blog-post-new.html">
                      <img src={item.imageSrc} alt="By spite about do of allow" />
                      <span className="info">
                        <span className="ion ion-document-text"></span>
                      </span>
                    </a>
                  </div>
                  <div className="desc">
                    <a href="blog-post-new.html">
                      <span className="date">{item.date}</span>
                    </a>
                    <a href="blog-post-new.html" className="name">{item.name}</a>
                    <div className="text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="clear"></div>
          </div>
          <div className="pager">
            <nav className="navigation pagination">
              <div className="nav-links">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">2</a>
                <a className="next page-numbers" href="#">Next</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
