import Link from "next/link";
import { BiSearch, BiHeart, BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-3 bg-gray-800 text-white">
        <Link href="/" className="text-2xl font-bold">
          Khmer24Scrap
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/search" className="flex items-center">
            <BiSearch className="mr-1" />
            Search
          </Link>
          <Link href="/favorites" className="flex items-center">
            <BiHeart className="mr-1" />
            Favorites
          </Link>
          <Link href="/profile" className="flex items-center">
            <BiUser className="mr-1" />
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
