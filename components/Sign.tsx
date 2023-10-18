import { signIn, useSession } from "next-auth/react"

export default function Sign() {
  const { data: session } = useSession()
  console.log(session);
  return session ? (
    <>
      <a href="/about">
        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-pink-500 text-lg font-bold text-white">
          {session.user?.name}
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </a>
    </>
  ) : (
    <a href="#">
      <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white" onClick={() => signIn('google')}>
        Faça o login agora
        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </a>
  );
};