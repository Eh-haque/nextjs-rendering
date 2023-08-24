import Link from "next/link";
import React from "react";

interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Server = async () => {
  const data: IUser[] = await getData();

  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between items-center">
        <p className="text-5xl text-center mb-5">Server</p>
        <Link
          className="px-6 py-2 rounded-xl shadow-lg bg-sky-300/20 backdrop-blur-sm"
          href="/client"
        >
          Client
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data?.map((user, index) => (
          <div
            key={index}
            className="p-6 w-full mx-auto rounded-xl shadow-lg space-x-4 bg-sky-300/20 backdrop-blur-sm"
          >
            <div>
              <div className="text-xl font-medium">{user.name}</div>
              <p className="">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Server;
