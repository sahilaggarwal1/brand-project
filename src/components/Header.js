import React from "react";
export default function Header() {
  return (
    <div>
      <nav className="flex justify-around my-4">
        <div>
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/Images/Header.png`}
            alt="logo"
          />
        </div>
        <ul className="flex space-x-10">
          <li className="cursor-pointer" href="#">
            Menu
          </li>
          <li className="  cursor-pointer" href="#">
            Location
          </li>
          <li className=" cursor-pointer" href="#">
            About
          </li>
          <li className=" cursor-pointer" href="#">
            Contact
          </li>
        </ul>
        <button className="bg-red-600 text-white w-20 rounded-sm">Login</button>
      </nav>
    </div>
  );
}
