import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white py-6 shadow-md">
      <footer className="container mx-auto flex items-center flex-col sm:flex-row justify-between px-5">
        {/* Logo and Title */}
        <a className="flex items-center text-blue-900 font-extrabold text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12 text-white p-2 bg-blue-500 rounded-full shadow-lg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3">Blogby</span>
        </a>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 mt-4 sm:mt-0">
          © 2023 HiraBlog —{' '}
          <a
            href="https://twitter.com"
            className="text-blue-600 hover:text-blue-800 transition"
            rel="noopener noreferrer"
            target="_blank"
          >
            @HiraBlog
          </a>
        </p>

        {/* Social Icons */}
        <span className="flex mt-4 sm:mt-0 space-x-4">
          <a className="text-gray-500 hover:text-blue-500 transition">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-blue-500 transition">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-blue-500 transition">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="text-gray-500 hover:text-blue-500 transition">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
