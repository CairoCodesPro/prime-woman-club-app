import Sign from '@/components/Sign';
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
          <Sign />
        </div>
      </div>
    </>
  );
}