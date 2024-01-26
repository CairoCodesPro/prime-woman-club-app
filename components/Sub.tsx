import { signIn, useSession } from "next-auth/react"

import { api } from '@/services/api'
import getStripeJs from "@/services/stripe-js";

interface SubButtonProps {
  priceId: string;
}


export default function SubButton({ priceId }: SubButtonProps) {
  const { data: session } = useSession();

  async function handleSub() {
    if (!session) {
      signIn('Google')
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-600 text-lg font-bold text-white" onClick={handleSub}>
        Assine agora
        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </>
  );
};