import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "react-slick";
import img1 from "../assets/img/demo/v5.jpg";
import { Animated } from "react-animated-css";

import {html} from '../helpers/Utils';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HomeSlider = () => {
  const slides = [
    {
      title: "Mitaric",
      subtitle: `  Sed eget orci eleifend enim mattis suscipit. <br />
            Suspendisse potenti non ipsum.`,
      image: "../assets/img/demo/v5.jpg",
      btnLabel: "Buy Now At iTunes",
      url: "#"
    },
    {
        title: "Mitaricccc",
        subtitle: `  Sed eget orci eleifend enim mattis suscipit. <br />
              Suspendisse potenti non ipsum.`,
        image: img1,
        btnLabel: "Buy Now At iTunesccc",
        url: "#"
      }
  ];
 
  const styles = imageUrl => {

    return{
      //  backgroundImage: 'url(' + require("../assets/img/demo/v11.jpg") + ')',
      backgroundImage: 'url(http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/b1.jpg)',
  
      };
  };


  return (
    <Slider {...settings} >
      {slides.map(({ title, subtitle, url, btnLabel, image }) => (
        <div key={title}>
          <div className="xv-slide" data-bg-possition="top" style={styles(image)}>
            <div className="has-bottom-gradient">
              <div className="p-md-5 p-3">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="xv-slider-content clearfix color-white">
                      <h1 className="s-64 mt-5 font-weight-lighter">{title}</h1>
                      <p className="s-24 font-weight-lighter" dangerouslySetInnerHTML={html(subtitle)} />
                      <div className="pt-3">
                        <a href={url} className="btn btn-primary btn-lg">
                          {btnLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-gradient"></div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default HomeSlider;
