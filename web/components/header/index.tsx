import Link from "next/link";

const Header = () => (
  <header>
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-expand-lg shadow-md py-2   relative flex items-center w-full  h-20">
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
