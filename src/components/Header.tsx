import React from "react";
import logo from "../images/algolia-icon.svg";
import Logo from "./Logo";

function Header({
  theme,
  setTheme,
}: {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex items-center justify-between py-4 md:py-8 px-4 md:px-8 bg-white dark:bg-xenon-900">
      <a
        href="/"
        className="inline-flex font-sora items-center gap-2.5 text-2xl font-bold text-grey-900 dark:text-white md:text-3xl"
        aria-label="logo"
      >
        <Logo className="fill-xenon-900 dark:fill-white" />
        algolia
      </a>
      <nav className="hidden gap-12 lg:flex">
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 dark:text-white transition duration-100 hover:text-xenon-400 dark:active:text-indigo-700"
        >
          Platform
        </a>
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 dark:text-white transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 dark:text-white transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Developers
        </a>
        <a
          href="#"
          className="text-lg font-sora text-xenon-600 dark:text-white transition duration-100 hover:text-xenon-400 active:text-indigo-700"
        >
          Resources
        </a>
      </nav>
      <span
        onClick={toggleTheme}
        className="capitalize cursor-pointer capitalize block rounded-lg  px-8 py-3 text-center text-sora text-sm font-semibold outline-none ring-indigo-300 transition duration-100 dark:bg-xenon-600 dark:text-white hover:bg-gray-300 focus-visible:ring md:text-base lg:inline-block"
      >
        Theme: {theme}
      </span>
    </header>
  );
}

export default Header;
