import Link from "next/link";

const Header = () => (
  <header className="bg-white sticky top-0">
    {/* <!-- Navbar --> */}
    <nav className="navbar bg-none navbar-expand-lg shadow-md py-2 text-black  relative flex items-center w-full  h-20">
      <ul className="list-none flex">
        <Link href="/" className="mx-6">
          Home
        </Link>
        <Link href="/articles" className="mr-6">
          Articles
        </Link>
        <li className="mr-6">About Me</li>
      </ul>
    </nav>
  </header>
);

export default Header;
