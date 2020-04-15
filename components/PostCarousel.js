import Slider from "react-slick";
import PostWidget from "./Posts/PostWidget";
const PostCarousel = ({ posts,title,subtitle }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <div className="d-flex relative">
        <div className="mb-4">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
      <Slider className="has-items-overlay" {...settings}>
        {posts.map(post => (
          <PostWidget post={post} key={post.id} />
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default PostCarousel;
