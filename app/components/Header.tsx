import { IconChalkboardUser } from "@/assets/icons/Logo"; // Icone representant le logo
import { FaSignOutAlt } from "react-icons/fa"; // Icone pour le bouton deconnexion

import Link from "next/link"; // Link pour la navigation

// Menu avec navigation sur les ecrans desktop et mobiles
const Header = () => {
  return (
    <header className="bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/produits">
              <IconChalkboardUser
                height={30}
                width={30}
                className="text-neutral-50"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/produits"
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-gray-700 hover:text-white"
                >
                  Produits
                </Link>
                <Link
                  href="/categories"
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-gray-700 hover:text-white"
                >
                  Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block ml-auto">
            <Link
              href="/"
              className="mx-3 text-gray-800 hover:text-gray-600 flex items-center"
            >
              <FaSignOutAlt className="inline mr-1 text-neutral-50" />
              <span className="text-neutral-50">Deconnexion</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/produits"
            className="block rounded-md px-3 py-2 text-base font-medium text-neutral-50 hover:bg-gray-700 hover:text-white"
          >
            Produits
          </Link>
          <Link
            href="/categories"
            className="block rounded-md px-3 py-2 text-base font-medium text-neutral-50 hover:bg-gray-700 hover:text-white"
          >
            Categories
          </Link>
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-neutral-50 hover:bg-gray-700 hover:text-white"
          >
            <FaSignOutAlt className="inline mr-2 text-neutral-50" />
            Deconnexion
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
