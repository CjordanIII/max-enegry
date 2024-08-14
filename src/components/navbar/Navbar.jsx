"use client";

import Image from "next/image.js";
import Link from "next/link";
import Button from "../button/Button.jsx";
import { contactUs, signInRegister } from "./navbarMetadata.jsx";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 flex items-center justify-between p-4 fixed top-0 left-0 w-full shadow-md z-10">
      {/* logo */}
      <div className="flex items-center">
        {/* Next has a Imge componet built in to optomise image just to let you know */}
        <Image
          src="/dom-white-logo.svg"
          alt="Dominion Energy"
          className="ml-5"
          width={100}
          height={100}
        />
      </div>

      {/* navigation links */}
      <ul className="flex space-x-6 text-white font-semibold">
        <li>
          <Link href="#" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="About Us">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="FAQ">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Start/Stop Service">
            Start/Stop Service
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Our Stories">
            Our Stories
          </Link>
        </li>
      </ul>

      {/* buttons */}
      <div className="flex space-x-4">
        <Link href="#">
          <Button style={contactUs.style} btnLabel={contactUs.btnLabel} />
        </Link>
        <Link href="#">
          <Button
            style={signInRegister.style}
            btnLabel={signInRegister.btnLabel}
            //   pass the function though as well so it can log out someting
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
