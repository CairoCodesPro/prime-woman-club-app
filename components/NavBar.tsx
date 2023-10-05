export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-between border-b shadow-sm py-8 px-10 mb-6">
        <div>
          <a className="text-2xl font-bold font-heading" href="#">
            Prime <span className="text-pink-500">Woman</span> Club
          </a>
        </div>
        <div>
          <a href="/about">
            <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-pink-500 text-lg font-bold text-white">
              Assine Agora
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}