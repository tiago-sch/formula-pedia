import Link from "next/link";
import cn from "classnames";

type AppNavbarProps = {
  active: "drivers" | "constructors" | "seasons" | "circuits";
};

const LinksList = ({ active }: AppNavbarProps) => (
  <>
    <li>
      <Link
        prefetch={false}
        href="/drivers"
        className={cn({underline: active === 'drivers'})}
      >
        Drivers
      </Link>
    </li>
    <li>
      <Link
        prefetch={false}
        href="/constructors"
        className={cn({underline: active === 'constructors'})}
      >
        Constructors
      </Link>
    </li>
    <li>
      <Link
        prefetch={false}
        href="/seasons"
        className={cn({underline: active === 'seasons'})}
      >
        Seasons
      </Link>
    </li>
    <li>
      <Link
        prefetch={false}
        href="/circuits"
        className={cn({underline: active === 'circuits'})}
      >Circuits</Link>
    </li>
  </>
)

const AppNavbar = ({ active }: AppNavbarProps) => (
  <nav className="navbar bg-neutral text-neutral-content shadow-sm px-0 mb-5 rounded">
    <div className="flex-1">
      <Link href="/" className="px-4 text-xl">Formula Pedia</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 hidden md:inline-flex">
        <LinksList active={active} />
      </ul>
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-lg dropdown-content bg-neutral text-neutral-content rounded z-1 mt-4 w-52 p-2 shadow md:hidden"
        >
          <LinksList active={active} />
        </ul>
      </div>
    </div>
  </nav>
);

export default AppNavbar;
