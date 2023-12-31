import React, { useState, useEffect } from "react";
import { User } from "../types";

interface BannerProps {
  users: User[];
  setFilteredUsers: (users: User[]) => void;
}

function Banner({ users, setFilteredUsers }: BannerProps) {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, setFilteredUsers, users]);

  return (
    <div className="mb-10 md:mb-16 text-center">
      <span className="uil-ff-sora uil-fw-semibold uil-lsp-big uil-tt-upper uil-color-xenon-600 uil-fsz-14 lg:uil-fsz-16 uil-d-block uil-mt-0 uil-mb-8 md:uil-gcstart-2 md:uil-gcend-8 md:uil-w-100p md:uil-ta-left font-sora uil-d-inline-block uil-m-0 uil-p-0 css-1hb9wbi !text-center">
        <span className=" uil-m-0 uil-p-0 css-3y689g mb-4 text-center text-3xl font-bold text-grey-900  md:mb-6 lg:text-3x font-sora align-serch-center">
          algolia users
        </span>
      </span>

      <p className="mx-auto max-w-screen-md text-center dark:text-grey-200 text-grey-700 md:text-lg font-inter p-8">
        Powering discovery for your world, search users below...
      </p>
      <div className="flex justify-center items-center dark:text-white">
        <input
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg border dark:border-xenon-600 p-4 t-4 text-sm shadow-sm dark:bg-xenon-600 dark:text-grey-200"
          placeholder="Search Algolia..."
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Banner;
