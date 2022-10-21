import React from "react";

const btn =
  "mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700">
      <div className="rounded-md border-2 p-8">
        <h2 className="text-center text-xl font-bold text-white">Login Page</h2>
        <div className="mt-4 flex flex-col items-center justify-center ">
          <button className={btn} type="button">
            Discord Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
