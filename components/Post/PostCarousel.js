import Slider from "react-slick";
import PostWidget from "./PostWidget";
const PostCarousel = ({ posts,title,subtitle }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
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
    <React.Fragment>
     {(title || subtitle) && <div className="d-flex relative" >
        <div className="mb-4">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div> }
      <Slider className="has-items-overlay " {...settings}>
        {posts.map(post => (
          <PostWidget post={post} key={post.id} />
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default PostCarousel;
