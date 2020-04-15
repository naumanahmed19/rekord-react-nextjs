import Slider from "react-slick";
import Album from "./Album";
const AlbumCarousel = ({albums}) => {

    
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
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
        <Slider className="has-items-overlay playlist" {...settings}>
        {albums.map(album => (
          <Album album={album} key={album.id} />
        ))}
      </Slider>
     );
}
 
export default AlbumCarousel;