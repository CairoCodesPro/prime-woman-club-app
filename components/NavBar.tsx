import Image from "next/image";
import Sign from "@/components/Sign";
import ClubDescontos from "@/components/ClubDescontos";
export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-between border-b shadow-sm py-4 px-10">
        <a href="/">
          <div className="flex space-x-2">
            <Image
              src="/iconsemfundo.png"
              alt="Vercel Logo"
              width={30}
              height={50}
            />
            <Image
              src="/logotext.png"
              alt="Vercel Logo"
              width={150}
              height={50}
            />
          </div>
        </a>
        <div className="flex gap-5">
          {/* <ClubDescontos /> */}
          <Sign />
        </div>
      </div>
    </>
  );
}
