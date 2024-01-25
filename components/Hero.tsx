import React from "react";
import { api } from "@/services/api";
import getStripeJs from "@/services/stripe-js";
import { signIn, useSession } from "next-auth/react";

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
      alert(err.message);
    }
  }

  return (
    <div className="relative h-screen" style={{ height: "75vh" }}>
      <div
        className="absolute inset-0 bg-cover bg-center rounded-md"
        style={{ backgroundImage: "url('/banne1.png')" }}
      ></div>
      <div className="absolute grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
        <div className="order-last flex justify-center lg:justify-end items-center px-2">
          <div className="hidden lg:block w-full pt-9">
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center lg:items-start p-10 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black mb-4">
            Promova o bem-estar, dentro e fora do trabalho
          </h1>
          <p className="text-2xl text-black mb-4">
            Fortaleça todas as dimensões do bem-estar de seus colaboradores com
            a mais completa (e criativa!) experiência digital web e mobile
          </p>
          <div className="mt-4">
            <button
              className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-pink-500 text-lg font-bold text-white"
              onClick={handleSub}
            >
              Assine agora
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
