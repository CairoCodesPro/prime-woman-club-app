import Head from 'next/head';

import SwiperSlider from '@/components/Swiper';
import Products from '@/components/Products';


export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <SwiperSlider />
      <Products />
    </>
  )
}