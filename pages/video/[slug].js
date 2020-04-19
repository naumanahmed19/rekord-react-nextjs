import { useRouter } from "next/router";
import Slider from "react-slick";
import { videos } from "../../assets/data/data";
import { Comments, Layout, Sidebar } from "../../components";
import { Col, Row } from "react-bootstrap";

const Video = ({ video }) => {
  const router = useRouter();
  //   const { id } = router.query;

  var settings = {
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <Row>
        <Col md={8}>
          <div className="video-responsive">
            <div className="card no-b r-0">
              <div className="card-body p-4">
                <div className="d-lg-flex align-items-center">
                  <h1 className="my-3 h4">{video.title}</h1>
                  <div className="ml-auto">
                    <a
                      href="#"
                      className="snackbar"
                      data-text="Added to favourites"
                      data-pos="top-right"
                      data-showAction="true"
                      data-actionText="ok"
                      data-actionTextColor="#fff"
                      data-backgroundColor="#0c101b"
                    >
                      <i className="icon-bookmark s-24"></i>
                    </a>
                    <a
                      href="#"
                      className="snackbar ml-3"
                      data-text="Added to favourites"
                      data-pos="top-right"
                      data-showAction="true"
                      data-actionText="ok"
                      data-actionTextColor="#fff"
                      data-backgroundColor="#0c101b"
                    >
                      <i className="icon-heart s-24"></i>
                    </a>
                    <a
                      href="#"
                      className="snackbar ml-3"
                      data-text="Added to favourites"
                      data-pos="top-right"
                      data-showAction="true"
                      data-actionText="ok"
                      data-actionTextColor="#fff"
                      data-backgroundColor="#0c101b"
                    >
                      <i className="icon-share-1 s-24"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={video.url}
                height="540"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0">
              <Slider className="has-items-overlay" {...settings}>
                <div>
                  <div className="p-5 bg-primary text-white">
                    <h5 className="font-weight-normal s-14">Views</h5>
                    <span className="s-48 font-weight-lighter text-primary">
                      140
                    </span>
                    <div>
                      {" "}
                      Likes
                      <span className="text-primary">
                        <i className="icon icon-arrow_downward"></i> 67%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-5">
                    <h5 className="font-weight-normal s-14">Share</h5>
                    <span className="s-48 font-weight-lighter amber-text">
                      700
                    </span>
                    <div>
                      <span className="amber-text">
                        <i className="icon icon-arrow_downward"></i> 34
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-5 light">
                    <h5 className="font-weight-normal s-14">Comments</h5>
                    <span className="s-48 font-weight-lighter text-indigo">
                      {video.comments.length}
                    </span>
                    <div>
                      {" "}
                      Iron
                      <span className="text-indigo">
                        <i className="icon icon-arrow_downward"></i> 89%
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-5">
                    <h5 className="font-weight-normal s-14">Likes</h5>
                    <span className="s-48 font-weight-lighter pink-text">
                      224
                    </span>
                    <div>
                      {" "}
                      Sodium
                      <span className="pink-text">
                        <i className="icon icon-arrow_downward"></i> 47%
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="card mt-1 mb-5">
            <div className="card-body">
              <Comments comments={video.comments} />
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

Video.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

 const video = videos.filter((video) => video.slug == slug)[0];

  // // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // // const json = await res.json()
 return { video };
};

export default Video;
