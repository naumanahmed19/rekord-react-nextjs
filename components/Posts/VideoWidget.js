const PostWidget = () => {
  return (
    <div className="card">
      <figure className="card-img figure">
        <div className="img-wrapper">
          <img src="assets/img/demo/v5.jpg" alt="Card image" />>
        </div>
        <div className="img-overlay"></div>
        <div className="has-bottom-gradient">
          <div className="d-flex">
            <div className="card-img-overlay">
              <div className="pt-3 pb-3">
                <a href="video-single.html">
                  <figure className="float-left mr-3 mt-1">
                    <i className="icon-play s-36"></i>
                  </figure>
                  <div>
                    <h5>Alexander Pierce</h5>
                    <small> Latest Video Released</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="bottom-gradient bottom-gradient-thumbnail"></div>
    </div>
  );
};

export default PostWidget;
