import React from "react";
import Image from "next/image";
export default function index() {
  return (
    <div className="flex justify-between  w-full">
      <div className="w-full">
        <Image src="/man.png" alt="" width={300} height={100} />
      </div>
      <div className="flex flex-col w-full justify-between py-16 items-center">
        <div className="flex w-full justify-center items-center">
          <a className="text-gray-50 font-light text-md">
            Find anything in{" "}
            <span className="bg-black inline-flex justify-center items-center px-2 rounded-sm text-xs font-normal py-0.5 text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              All Uganda
            </span>
          </a>
        </div>
        <div className="flex w-full">
          <input
            type="text"
            className="w-full border-0 placeholder:text-sm bg-gray-50 rounded-sm py-3 rounded-r-none border-r-0 p-4 focus:outline-none "
            placeholder="I am looking for..."
          />
          <button className="inline-flex border-0  bg-gray-50 rounded-sm rounded-l-none border-l-0 p-2 py-3 focus:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#00b53f]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full items-end flex">
        <Image src="/girls.png" alt="" width={550} height={200} />
          </div>

          
    </div>
  );
}
