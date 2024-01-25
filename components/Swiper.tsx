import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeBanners extends Component {
  render() {
    const settings = {

      centerMode: true,
      centerPadding: "160px",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="lg:mx-52">
          <div className="flex justify-center">
            <img src="/logotext.png" className="w-72 py-5" />
          </div>
          <Slider {...settings}>
            <div className="slide-item">
              <img src="/103c440b6731b45b0ff66a52a878004f.png" alt="Vercel Log" className="slide-img"  />
            </div>
            <div className="slide-item">
              <img src="/banner-promo.jpg" alt="Vercel Logo"  className="slide-img" />
            </div>
            <div className="slide-item">
              <img src="/BANNER-SITE-DIO-3.webp" alt="Vercel Logo"  className="slide-img"/>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}