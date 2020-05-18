import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "react-slick";
import img1 from "../assets/img/demo/v5.jpg";
import { Animated } from "react-animated-css";
import {slides} from '../assets/data/data';
import {backgroundImage} from '../helpers/Utils';

import {html} from '../helpers/Utils';
import { LayoutContainer } from ".";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HomeSlider = () => {

  return (
    <Slider {...settings} >
      {slides.map(({ title, subtitle, url, btnLabel, image }) => (
        <div key={title}>
          <div className="xv-slide theme-text" data-bg-possition="top" style={backgroundImage(image)}>
            <div className="pt-5 pb-5 has-bottom-gradient">
              <LayoutContainer>
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
              </LayoutContainer>
            </div>
            <div className="bottom-gradient"></div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default HomeSlider;
