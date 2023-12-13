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
  }, [search]);

  return (
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-grey-900  md:mb-6 lg:text-3x font-sora">
        Algolia Users
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-grey-700 md:text-lg font-inter">
        Powering Discovery for your world, search users below...
      </p>
      <input placeholder="Search..." value={search} onChange={handleChange} />
    </div>
  );
}

export default Banner;
