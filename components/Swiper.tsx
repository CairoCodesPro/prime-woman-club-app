import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class HomeBanners extends Component {
  render() {
    const settings = {

      centerMode: true,
      centerPadding: "160px",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      dots: true,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Image src="/banner1.png" alt="Vercel Logo" width={100} height={640} layout="responsive" />
          </div>
          <div>
            <Image src="/banner2.png" alt="Vercel Logo" width={100} height={640} layout="responsive" />
          </div>
          <div>
            <Image src="/banner1.png" alt="Vercel Logo" width={1920} height={640} layout="responsive" />
          </div>
          <div>
            <Image src="/banner2.png" alt="Vercel Logo" width={1920} height={640} layout="responsive" />
          </div>
          <div>
            <Image src="/banner1.png" alt="Vercel Logo" width={1920} height={640} layout="responsive" />
          </div>
          <div>
            <Image src="/banner2.png" alt="Vercel Logo" width={1920} height={640} layout="responsive" />
          </div>
        </Slider>
      </>
    );
  }
}