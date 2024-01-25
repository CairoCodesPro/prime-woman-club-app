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
          <div className="py-5 pl-36 pr-2">
            <p className="text-xl pt-5 font-thin">
              O melhor clube de vantagens para mulheres em Teresina, contamos com os melhores parceiros
            </p>
          </div>
          <div className="col-span-2 pr-16">
            <Slider {...settings}>
              <div className="pt-10">
                <img src="/espacodassobrancelhas.png" alt="" className="" />
              </div>
              <div className="pt-10">
                <img src="/espacodassobrancelhas.png" alt="" className="" />
              </div>
              <div className="pt-10">
                <img src="/espacodassobrancelhas.png" alt="" className="" />
              </div>
              <div className="pt-10">
                <img src="/espacodassobrancelhas.png" alt="" className="" />
              </div>
              <div className="pt-10">
                <img src="/espacodassobrancelhas.png" alt="" className="" />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
