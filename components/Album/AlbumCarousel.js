import Slider from "react-slick";
import Album from "./Album"
const AlbumCarousel = ({ albums,title,subtitle }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {

          slidesToShow: 2,
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
     
      <Slider className="has-items-overlay playlist" {...settings}>
        {albums.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default AlbumCarousel;
