import Head from 'next/head';
import SwiperSlider from '@/components/Swiper';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <NavBar />
      <SwiperSlider />
    </>
  )
}