import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Sub from "@/components/Sub";

export default class HomeBanners extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: "200px",
      slidesToShow: 3,
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
        <div className="py-5 px-4 grid grid-cols-3">
          <div className="pl-36 pr-2">
            <p className="text-xl pt-5 font-thin">
              O  <span className="text-yellow-600">melhor clube de vantagens</span> para mulheres em Teresina, contamos com os melhores parceiros
            </p>
          </div>
          <div className="col-span-2 pr-16">
            <Slider {...settings}>
              <div className="pt-5">
                <img src="/espacodassobrancelhas.png" alt="" className="grayscale" />
              </div>
              <div className="pt-5">
                <img src="/espacodassobrancelhas.png" alt="" className="grayscale" />
              </div>
              <div className="pt-5">
                <img src="/espacodassobrancelhas.png" alt="" className="grayscale" />
              </div>
              <div className="pt-5">
                <img src="/espacodassobrancelhas.png" alt="" className="grayscale" />
              </div>
              <div className="pt-5">
                <img src="/espacodassobrancelhas.png" alt="" className="grayscale" />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
