import Image from "next/image";
import Sign from '@/components/Sign';
export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-between border-b shadow-sm py-4 px-10">
        <div className="flex space-x-2">
          <Image src="/iconsemfundo.png" alt="Vercel Logo" width={30} height={50} />
          <Image src="/logotext.png" alt="Vercel Logo" width={150} height={50} />
        </div>
        <div>
          <Sign />
        </div>
      </div>
    </>
  );
}