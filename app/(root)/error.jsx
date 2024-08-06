"use client";

// react
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="h-[40vh] w-full flex flex-col justify-center items-center text-center">
      <h1 className="font-black text-5xl mb-4">Oops!😭</h1>
      <p className="text-p1 mb-2">
        Cannot fetch data at this time! The above error has occured:
      </p>
      <p className="bg-lightRose text-red-600 rounded-lg px-2 py-1 font-bold mb-6">
        {error.message}
      </p>
    </section>
  );
}
