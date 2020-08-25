import Slider from "react-slick";
import PropTypes from 'prop-types';



const ArtistLettersFilter = ({ showAll, showonly, category }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 26,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 13,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  
  const buttonClasses = (letter) => {
    return `btn btn-outline-primary btn btn-sm r-5 ${
      letter === category ? "active" : ""
    }`;
  };

  return (
    <Slider className="mb-5" {...settings}>
      <div>
        <button className={buttonClasses("all")} onClick={showAll}>
          All
        </button>
      </div>
      {letters.map((letter) => (
        <div key={letter}>
          <button
            className={buttonClasses(letter)}
            onClick={() => showonly(letter)}
          >
            {letter}
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default ArtistLettersFilter;

ArtistLettersFilter.propTypes = {
  showAll: PropTypes.func,
  showonly: PropTypes.func,
  category: PropTypes.string,
};
