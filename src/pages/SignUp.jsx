import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <div className="flex justify-between bg-gray-200 items-center px-20 py-3 border-b border-gray-200 mb-10">
        <h1 className="text-2xl font-semibold tracking-wider">
        SignUp Page
        </h1>
        <Link
          to="/"
          className="hover:text-blue-700 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col items-center bg-gray-200 max-w-xl mx-auto mt-10 p-10 rounded-lg mb-20 gap-2">
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg w-full"
          required
        />
        <br />
        <input
          type="email"
          placeholder="email"
          className="p-3 rounded-lg w-full"
          required
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg w-full"
          required
        />
        <br />
        <button className="bg-red-600 w-full p-3 rounded-lg text-white font-semibold text-xl">Sign Up</button>
        <p>I have already account <Link to='/sign-in' className="text-blue-600">Sign in</Link></p>
      </form>
    </div>
  );
}
