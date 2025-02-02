import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-5">
        <Link href="/" className="flex items-center text-white font-extrabold text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12 text-white p-2 bg-yellow-400 rounded-full shadow-lg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3">HiraBlog</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/blog" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            Blog
          </Link>
        </nav>

        <button className="bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
