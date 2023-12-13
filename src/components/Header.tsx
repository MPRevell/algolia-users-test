import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between py-4 md:py-8   px-4 md:px-8">
      <a
        href="/"
        className="inline-flex font-sora items-center gap-2.5 text-2xl font-bold text-grey-900 md:text-3xl"
        aria-label="logo"
      >
        <img src={"../images/algolia-icon.png"} />
        algolia
      </a>
      <nav className="hidden gap-12 lg:flex">
        <a href="#" className="text-lg font-sora text-xenon-600">
          Platform
        </a>
        <a
          href="#"
          className="text-lg  font-sora text-xenon-600 transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Developers
        </a>
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Resources
        </a>
      </nav>
      <span className="cursor-pointer capitalize hidden rounded-lg  px-8 py-3 text-center text-sora text-sm font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring md:text-base lg:inline-block">
        I should make this toggle theme{" "}
      </span>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
    </header>
  );
}

export default Header;
