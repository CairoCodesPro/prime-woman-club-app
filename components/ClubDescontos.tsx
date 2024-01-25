import React from "react";
import { BsCheck } from "react-icons/bs";

const Price = () => {
  return (
    <a href="/clube-de-vantagens">
      <button
        className="middle none center rounded-lg py-3 px-5 text-xs uppercase text-black shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Clube de Descontos
      </button>
    </a>
  );
};

export default Price;
