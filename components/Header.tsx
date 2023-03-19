import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

import AppLogo from './AppLogo';

const Header = () => {

  const { data: session } = useSession();

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black 
    font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <AppLogo color='' />
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">Posts</li>
            <li className="headerLi">Categories</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img className="w-8 h-8 rounded-full bg-bgColor "
              src={
                session
                  ? session?.user!.image!
                  : `https://api.dicebear.com/5.x/avataaars-neutral/svg?seed=${new Date().getHours()}`
              }
              alt={session ? session?.user!.name! : "Arik Alexandrov"} />
            <p className="text-sm font-medium">
              {session ? session?.user!.name : 'Shalom Stranger!'}
            </p>
          </div>
          <button onClick={() => { session ? signOut() : signIn() }}
            className="uppercase text-sm border-[1px] border-primaryColor
             hover:border-secondaryColor px-4 py-1 font-semibold
              hover:text-white rounded-md hover:bg-secondaryColor
               transition-all duration-300 active:bg-yellow-600">
            {session ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
