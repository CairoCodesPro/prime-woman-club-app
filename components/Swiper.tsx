import React, { Component } from "react"
import Slider from 'react-slick'
import Image from 'next/image'

export default class CarouselDr extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="px-2">
            <Image src="/Dr1.jpeg" alt="Vercel Logo" width={450} height={640} />
          </div>
          <div className="px-2">
            <Image src="/Dr2.jpeg" alt="Vercel Logo" width={450} height={640} />
          </div>
        </Slider>
      </div>
    );
  }
}