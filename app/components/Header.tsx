import { IconChalkboardUser } from "@/assets/icons/Logo";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-100">
      <nav className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex  h-16 items-center justify-between">
          <div className="flex  items-center">
            <Link href="/">
              <IconChalkboardUser height={30} width={30} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/home"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Produits
                </Link>
                <a
                  href="/categories"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Categories
                </a>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/" className="mx-3 text-gray-800 hover:text-gray-600">
                <FaSignOutAlt className="inline mr-1" /> Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Produits
          </Link>
          <Link
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Categories
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
