import { useState } from 'react';

const productsData = [
  {
    id: 1,
    name: 'Adobe Photoshop CC 2022',
    segment: 'architecto',
    price: 850,
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'The Hilton Hotel',
    segment: 'corrupti',
    price: 450,
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    name: 'The Hilton Hotel',
    segment: 'excepturi',
    price: 450,
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: 4,
    name: 'The Hilton Hotel',
    segment: 'consectetur',
    price: 450,
    location: 'Lisbon, Portugal',
    image:
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
  },
];

const Products = () => {
  const [selectedSegment, setSelectedSegment] = useState('all'); // Inicialmente, nenhum filtro aplicado

  const handleSegmentFilter = (segment: string) => {
    setSelectedSegment(segment);
  };

  return (
    <div className="pt-32 bg-white">
      <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800">
        <button
          onClick={() => handleSegmentFilter('all')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 ${
            selectedSegment === 'all' ? 'bg-blue-200' : ''
          }`}
        >
          <span>All</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('architecto')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 ${
            selectedSegment === 'architecto' ? 'bg-blue-200' : ''
          }`}
        >
          <span>Architecto</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('corrupti')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 ${
            selectedSegment === 'corrupti' ? 'bg-blue-200' : ''
          }`}
        >
          <span>Corrupti</span>
        </button>
        <button
          onClick={() => handleSegmentFilter('excepturi')}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600 ${
            selectedSegment === 'excepturi' ? 'bg-blue-200' : ''
          }`}
        >
          <span>Excepturi</span>
        </button>
      </div>
      <section className="py-10 bg-gray-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData
            .filter((product) =>
              selectedSegment === 'all' ? true : product.segment === selectedSegment
            )
            .map((product) => (
              <article
                key={product.id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
              >
                <a href="#">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={product.image} alt={product.name} />
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        {/* Ícone do carrinho */}
                      </svg>
                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{product.name}</h2>
                    <p className="mt-1 text-sm text-slate-400">{product.location}</p>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">${product.price}</p>
                      <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          {/* Ícone do carrinho */}
                        </svg>
                        <button className="text-sm">Add to cart</button>
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
