import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Cards = () => {
  return (
    <section className="py-10 bg-gray-100 z-40 relative px-16">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="flex justify-center items-center p-2">
            <div className="px-16 ml-2">
              <h2 className="text-3xl font-light text-black p-2">
                <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-600 lg:inline">
                  Prime Woman Club
                </span>{" "}
                é um app que reúne todas as ações de bem-estar da organização
              </h2>
              <p className="p-2 text-xl font-light text-black">Siga o passo a passo e conheça nosso app.</p>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-2">
              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                    <h1 className="font-semibold">Primeiro Passo:</h1>
                    <p className="flex">
                      Se cadastre com uma conta google, rápido e seguro.<span className="flex justify-center items-center"><BsArrowRightCircle  size={20}/></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                  <h1 className="font-semibold">Segundo Passo:</h1>
                    <p className="flex">
                      Clique em qualquer botão "Assine Agora" e faça o pagamento.<span className="flex justify-center items-center"><BsArrowRightCircle  size={20}/></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                  <h1 className="font-semibold">Terceiro Passo:</h1>
                    <p>
                      Aproveite nosso Clube de Descontos e desfrutar das vantagens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
