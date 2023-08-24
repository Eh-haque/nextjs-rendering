"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
const Client = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-between items-center p-10">
        <p>Loading...</p>
        <Link
          className="px-6 py-2 rounded-xl shadow-lg bg-sky-300/20 backdrop-blur-sm"
          href="/server"
        >
          Server
        </Link>
      </div>
    );
  if (!data) return <p className="text-center">No profile data</p>;

  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between items-center">
        <p className="text-5xl text-center mb-5">Client</p>

        <Link
          className="px-6 py-2 rounded-xl shadow-lg bg-sky-300/20 backdrop-blur-sm"
          href="/server"
        >
          Server
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

export default Client;
