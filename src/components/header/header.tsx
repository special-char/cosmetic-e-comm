import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import Image from "next/image";
//import LogoImg from "./logo.jpg";
import LogoImg from "../../../public/images/logo.jpg"
interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="p-4 flex justify-between items-center my-8">
      <div className="mx-4">
        <Image src={LogoImg} alt="img"  />
      </div>
      <nav className="flex-grow text-center">
        <ul className="flex justify-center gap-12 font-semibold">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-gray-300">
              Shop
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-300">
              Blog
            </a>
          </li>
          <li>
            <a href="/pages" className="hover:text-gray-300">
              Pages
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6 mr-6 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border border-black-300 rounded-md focus:outline-none focus:border-black-600 border-r-2"
          />
          <div className="absolute top-0 right-0 px-3 py-2">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <a href="#" className="h-8 w-8">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
        <a href="login" className="h-6 w-6">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </header>
  );
};

export default Header;
