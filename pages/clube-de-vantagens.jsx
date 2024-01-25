import Head from 'next/head';
import Swiper from '@/components/Swiper';
import Products from '@/components/Products';
import Price from '@/components/Price';
import Footer from '@/components/Footer';

export default function Clube() {

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Swiper />
      <Products />
      <Price />
      <Footer />
    </>
  )
}