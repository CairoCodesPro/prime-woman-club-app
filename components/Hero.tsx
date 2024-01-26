import React from "react";
import { api } from "@/services/api";
import getStripeJs from "@/services/stripe-js";
import { signIn, useSession } from "next-auth/react";
import Sub from '@/components/Sub';

interface SubButtonProps {
  priceId: string;
}

export default function SubButton({ priceId }: SubButtonProps) {
  const { data: session } = useSession();

  async function handleSub() {
    if (!session) {
      signIn("Google");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="relative h-screen hero-bg" style={{ backgroundImage: "url('/banne1.png')" }}>
      <div className="absolute grid grid-cols-1 lg:grid-cols-2 gap-5 h-full px-36">
        <div className="h-full flex flex-col justify-center w-96">
          <h1 className="text-5xl font-bold text-black p-4">
            <span className="text-yellow-600">Assine agora</span> nosso Clube de Vantagens
          </h1>
          <p className="text-2xl text-gray-700 p-4">
            E tenha em mãos os melhores descontos da região
          </p>
          <div className="p-4">
            {/* <button
              className="group relative h-12 w-72 overflow-hidden rounded-2xl bg-yellow-600 text-base font-semibold text-white"
              onClick={handleSub}
            >
              Assine agora Prime Woman Club
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button> */}
            <Sub />
          </div>
        </div>
      </div>
    </div>
  );
}
