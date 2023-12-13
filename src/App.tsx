import React from "react";
import "./App.css";
import { api } from "./utils";
import type { User } from "./types";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NotFound from "./components/NotFound";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    api<User[]>("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="bg-white dark:bg-xenon-900 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Banner users={users} setFilteredUsers={setFilteredUsers} />
          {filteredUsers && filteredUsers.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {filteredUsers.map((user) => (
                <UserCard user={user} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
