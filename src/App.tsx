import React from "react";
import "./App.css";
import { api } from "./utils";
import type { User } from "./types";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api<User[]>("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-grey-900  md:mb-6 lg:text-3x font-sora">
              Algolia Users
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-grey-700 md:text-lg font-inter">
              Powering Discovery for your world, search users below...
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {users.map((user) => (
              <UserCard user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
