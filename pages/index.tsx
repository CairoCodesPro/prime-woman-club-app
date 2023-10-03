import Head from 'next/head';
import SwiperSlider from '@/components/Swiper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <h1>
        Regga <span>ton<span>World</span></span>
      </h1>
      <SwiperSlider />
    </>
  )
}