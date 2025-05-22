import React from "react";
import logo from "../assets/logo.png"; 

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-row items-center justify-center gap-4">
      <img src={logo} alt="Logo" className="h-16 w-auto" />
      <h1 className="text-4xl font-bold">My CareerEx React App</h1>
    </header>
  );
}

export default Header;
 