import Head from 'next/head';
import Swiper from '@/components/Swiper';
import Products from '@/components/Products';

export default function Clube() {

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Swiper />
      <Products />
    </>
  )
}