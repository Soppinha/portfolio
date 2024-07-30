import { useState } from "react";
import { Logo } from "../components/Logo.jsx";
import { Menu } from "../components/Menu.jsx";
import { NavOpitionsMenu, NavOptions } from "../components/NavOptions.jsx";
import { useScrollShadow } from "../hooks/scrollView.js";

export const MyNavbarBr = () => {
  const hasShadow = useScrollShadow();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (open) => {
    setIsMenuOpen(open);
  };

  return (
    <nav
      className={`flex z-[999] fixed top-0 left-0 right-0 px-8 transition-all duration-300 justify-between content-center ${
        hasShadow
          ? "drop-shadow-[0_3px_2px_rgba(0,0,0,0.15)] transition-all duration-800 bg-intense-grey"
          : ""
      }`}
    >
      <Logo />
      <div className="hidden md:flex py-7">
        <NavOptions />
      </div>

      <Menu isOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      {isMenuOpen && (
        <div
          className={`fixed pb-2 top-0 right-0 w-full min-h-56 bg-black drop-shadow-[0_3px_4px_rgba(0,0,0,0.8)] z-40 md:opacity-0 duration-500 flex flex-col items-center justify-center`}
        >
          <NavOpitionsMenu />
        </div>
      )}
    </nav>
  );
};
