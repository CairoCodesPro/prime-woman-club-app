import Head from 'next/head';
import { GetStaticProps } from 'next';

import SwiperSlider from '@/components/Swiper';
import Products from '@/components/Products';
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string;
    amount: number
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <SwiperSlider />
      <Products />
      <h1>{product.amount}</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1NzgmPD5nW942IVIBmTI72vN', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  }
}