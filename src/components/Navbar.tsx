import React from "react";
import {IoIosLogOut} from "react-icons/io";
import {AiOutlineMenu} from "react-icons/ai";

interface Props {
  username: string;
}

export const Navbar = ({username}: Props) => {
  return (
    <div className="flex h-[50px] w-full flex-row items-center bg-gray-900 px-4 text-white drop-shadow-lg">
      <button
        className="mr-5 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
        type="button"
      >
        <AiOutlineMenu />
      </button>
      <div className="flex items-center gap-1">
        <span>MyThingsApp</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-10">
        Logged as: {username}
        <button
          className=" rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
          type="button"
        >
          <IoIosLogOut />
        </button>
      </div>
    </div>
  );
};
