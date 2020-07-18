import {BaseWidget} from "..";

const VideoWidget = ({ title, videos }) => {
  return (
    <BaseWidget title={title} >
      <ul className="list-group list-group-flush">
        {videos.map((video) => (
          <li className="list-group-item" key={video.id}>
            <div className="d-flex align-items-center ">
              <div className="col-3">
                <img src={video.thumbnail} alt="" />
              </div>
              <div className="ml-3">
                <a href="video-single.html">
                  <h6>{video.title}</h6>
                </a>
                <small className="mt-1">{video.comments.length} Comments</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </BaseWidget>
  );
};

export default VideoWidget;
