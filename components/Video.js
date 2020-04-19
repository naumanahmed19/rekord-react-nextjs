import Link from "next/link";

const Video = ({video,className}) => {
  return (
    <div className={className}>
      <Link href="/video/[slug]" as={`/video/${video.slug}`}>
    <div className="clickable card">
      <figure className="card-img figure">
        <div className="img-wrapper">
          <img src={video.thumbnail} alt={video.title} />
        </div>
        <div className="img-overlay"></div>
        <div className="has-bottom-gradient">
          <div className="d-flex">
            <div className="card-img-overlay">
              <div className="pt-3 pb-3">
              
                  <div className="text-primary">
                    <figure className="float-left mr-3 mt-1">
                      <i className="icon-play s-36"></i>
                    </figure>
                    <div>
                      <h4>{video.title}</h4>
                      <small>{video.comments.length} Comments</small>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="bottom-gradient bottom-gradient-thumbnail"></div>
    </div>
    </Link>
    </div>
  );
};

export default Video;
