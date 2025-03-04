import Link from "next/link";

type AppNavbarProps = {
  active: "drivers" | "constructors" | "seasons" | "circuits";
};

const LinksList = ({ active }: AppNavbarProps) => (
  <>
    <li>
      <Link href="/drivers" className={active === 'drivers' ? "underline" : ""}>Drivers</Link>
    </li>
    <li>
      <Link href="/constructors" className={active === 'constructors' ? "underline" : ""}>Constructors</Link>
    </li>
    <li>
      <Link href="/seasons" className={active === 'seasons' ? "underline" : ""}>Seasons</Link>
    </li>
    <li>
      <Link href="/circuits" className={active === 'circuits' ? "underline" : ""}>Circuits</Link>
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
