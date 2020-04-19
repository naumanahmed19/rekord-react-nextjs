import {Widget} from "..";

const VideoWidget = ({ title, videos }) => {
  return (
    <Widget title={title} >
      <ul class="list-group list-group-flush">
        {videos.map((video) => (
          <li class="list-group-item">
            <div class="d-flex align-items-center ">
              <div class="col-3">
                <img src={video.thumbnail} alt="" />
              </div>
              <div class="ml-3">
                <a href="video-single.html">
                  <h6>{video.title}</h6>
                </a>
                <small class="mt-1">{video.comments.length} Comments</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Widget>
  );
};

export default VideoWidget;
