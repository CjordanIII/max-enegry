"use client";

import Image from "next/image.js";
import Link from "next/link";
import { useState } from "react";
import { Hamburger } from "../../assets/icons/hamburger.jsx";
import Button from "../button/Button.jsx";
import { signInRegister } from "../button/buttonMetadata.jsx";
import MobleNavbar from "./MobleNavbar.jsx";
import { contactUs, navbarLinks } from "./navbarMetadata.jsx";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleToggle = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <nav className="bg-yellow-500 flex items-center justify-between p-4 fixed top-0 left-0 w-full shadow-md z-10">
      {/* logo */}
      <div className="flex items-center">
        <Image
          src="/dom-white-logo.svg"
          alt="Dominion Energy"
          className="ml-5"
          width={100}
          height={100}
        />

        {/* navigation links */}
        <ul className="flex space-x-6 text-white font-semibold hidden md:flex">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} aria-label={link.name}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* buttons */}
        <div className="flex space-x-4 hidden md:flex">
          <Link href="#">
            <Button style={contactUs.style} btnLabel={contactUs.btnLabel} />
          </Link>
          <Link href="#">
            <Button
              style={signInRegister.style}
              btnLabel={signInRegister.btnLabel}
            />
          </Link>
        </div>
        <div className="  lg:hidden" onClick={handleToggle}>
          {showNavbar ? (
            <MobleNavbar
              setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
            />
          ) : (
            <button>
              <Hamburger />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
