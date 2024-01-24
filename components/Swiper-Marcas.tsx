import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Sub from "@/components/Sub";

export default class HomeBanners extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: "250px",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="py-5 px-4 grid grid-cols-2">
          <div className="text-center text-2xl py-16">
            <p>
              As grandes multinacionais escolhem nosso app
              <span className="flex justify-center py-2">
                <img src="/logotext.png" alt="" className="w-44" />
              </span>
            </p>
          </div>
          <div>
            <Slider {...settings}>
              <div>
                <img src="/aveeno.png" alt="" className="" />
              </div>
              <div className="py-8 px-10">
                <img src="/ducray.png" alt="" className="" />
              </div>
              <div className="py-12 px-10">
                <img src="/nuxe.png" alt="" className="" />
              </div>
              <div>
                <img src="/phyto.png" alt="" className="" />
              </div>
              <div>
                <img src="/shiseido.png" alt="" className="" />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
