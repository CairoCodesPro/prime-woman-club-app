import { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Lash Lifting (Permanente De Cílios)',
    segment: 'architecto',
    price: 850,
    location: 'Homero, Teresina',
    image:
      '/cilios.jpg',
    discount: '50%'
  },
  {
    id: 2,
    name: 'Luzes Ou Mechas Ou Californiana + Corte + Hidratação e Corte Simples',
    segment: 'corrupti',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/luzes.jpg',
    discount: '25%'
  },
  {
    id: 3,
    name: 'Alongamento de Unhas + Manuntenção',
    segment: 'excepturi',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/alongamento.jpg',
    discount: '45%'
  },
  {
    id: 4,
    name: '1 Sessão Limpeza De Pele + Extração + Esfoliação + Máscara Facial',
    segment: 'consectetur',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/limpeza.jpg',
    discount: '33%'
  },
  {
    id: 5,
    name: 'Lash Lifting (Permanente De Cílios)',
    segment: 'architecto',
    price: 850,
    location: 'Homero, Teresina',
    image:
      '/cilios.jpg',
    discount: '50%'
  },
  {
    id: 6,
    name: '1 Sessão Limpeza De Pele + Extração + Esfoliação + Máscara Facial',
    segment: 'consectetur',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/limpeza-de-pele.jpg',
    discount: '33%'
  },
  {
    id: 7,
    name: 'Luzes Ou Mechas Ou Californiana + Corte + Hidratação e Corte Simples',
    segment: 'corrupti',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/luzes.jpg',
    discount: '25%'
  },
  {
    id: 8,
    name: 'Alongamento de Unhas + Manuntenção',
    segment: 'excepturi',
    price: 450,
    location: 'Teresina, Piauí',
    image:
      '/alongamento.jpg',
    discount: '45%'
  },
];

const Products = () => {
  const [selectedSegment, setSelectedSegment] = useState('all'); // Inicialmente, nenhum filtro aplicado

  const handleSegmentFilter = (segment: string) => {
    setSelectedSegment(segment);
  };

  return (
    <div className="py-5 bg-white">
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800">
        <button
          onClick={() => handleSegmentFilter('all')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-900 ${selectedSegment === 'all' ? 'rounded-xl transition bg-yellow-600 text-white active:bg-yellow-800' : ''
            }`}
        >
          <span>Todos</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('architecto')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-900 ${selectedSegment === 'architecto' ? 'rounded-xl transition bg-yellow-600 text-white active:bg-yellow-800' : ''
            }`}
        >
          <span>Salão de Beleza</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('corrupti')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-900 ${selectedSegment === 'corrupti' ? 'rounded-xl transition bg-yellow-600 text-white active:bg-yellow-800' : ''
            }`}
        >
          <span>Cabelos</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('excepturi')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-900 ${selectedSegment === 'excepturi' ? 'rounded-xl transition bg-yellow-600 text-white active:bg-yellow-800' : ''
            }`}
        >
          <span>Unhas</span>
        </button>
      </div>
      <section className="py-5 px-6 bg-gray-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData
            .filter((product) =>
              selectedSegment === 'all' ? true : product.segment === selectedSegment
            )
            .map((product) => (
              <article
                key={product.id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 z-0"
              >
                <a href="#">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-3.5 py-1.5 rounded dark:rounded-xl transition bg-yellow-600 active:bg-yellow-800 dark:text-blue-800 ml-3 absolute bottom-1">{product.discount}</span>
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{product.name}</h2>
                    <p className="mt-1 text-sm text-slate-400">{product.location}</p>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">${product.price}</p>
                      <div className="flex items-center space-x-1.5 rounded-lg bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp text-white" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        <button className="text-sm">WhatsApp</button>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
