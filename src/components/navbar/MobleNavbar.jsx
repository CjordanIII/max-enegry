"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import Button from "../button/Button";
import { contactUs, signInRegister } from "../button/buttonMetadata";
import { navbarLinks } from "./navbarMetadata";

const MobileNavbar = ({ setShowNavbar, showNavbar }) => {
  const ref = useRef(null);

  const handleOutsideClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowNavbar(false); // Close navbar when clicking outside
      }
    },
    [setShowNavbar]
  );

  const handleLinkClick = (e) => {
    if (e.target.tagName === "BUTTON" && e.target.tagName === "A") {
      setShowNavbar(false); // Close the navbar if the click is on a button or link
    }
  };

  useEffect(() => {
    if (showNavbar) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick, showNavbar]);

  return (
    <nav
      ref={ref}
      className="bg-yellow-500 flex-col p-4 fixed top-0 right-0 h-[100vh] w-60 shadow-md z-10"
    >
      {/* logo */}

      {/* navigation links */}
      <ul className="flex-col space-y-12 mb-6 text-white font-semibold">
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              aria-label={link.name}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* buttons */}
      <div className="space-y-10">
        <div className=" flex ">
          <Link href="#" onClick={handleLinkClick}>
            <Button style={contactUs.style} btnLabel={contactUs.btnLabel} />
          </Link>
        </div>
        <div>
          <Link href="#" onClick={handleLinkClick}>
            <Button
              style={signInRegister.style}
              btnLabel={signInRegister.btnLabel}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
