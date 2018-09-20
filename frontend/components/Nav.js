import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Selling page</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;
