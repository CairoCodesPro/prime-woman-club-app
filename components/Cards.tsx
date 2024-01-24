import { useState } from "react";

const Cards = () => {
  return (
    <section className="py-10 bg-white z-40 relative">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="flex justify-center items-center p-2">
            <div>
              <h2 className="text-3xl font-light text-black p-2">
                <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-600 lg:inline">
                  Prime Woman
                </span>{" "}
                é um app que reúne todas as ações de bem-estar da organização
              </h2>
              <p className="p-2 text-xl font-light text-black">Siga o passo a passo e conheça nosso app.</p>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                    <h1 className="font-semibold p-2">Primeiro Passo:</h1>
                    <p>
                      Se cadastre com uma conta google segura ou seu email pessoal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                  <h1 className="font-semibold p-2">Segundo Passo:</h1>
                    <p>
                      Após seu cadastro, faça seu login logo acima.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="text-gray-900">
                  <h1 className="font-semibold p-2">Terceiro Passo:</h1>
                    <p>
                      Entre na plataforma e desfruto de nosso clube de desconto.
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
