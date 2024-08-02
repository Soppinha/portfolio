import { useState, useEffect, useCallback } from "react";
import { Logo } from "../components/Logo.jsx";
import { Menu } from "../components/Menu.jsx";
import { NavOpitionsMenu, NavOptions } from "../components/NavOptions.jsx";
import { useScrollShadow } from "../hooks/scrollView.js";

export const MyNavbar = () => {
  const hasShadow = useScrollShadow();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  const handleMenuToggle = (open) => {
    setIsMenuOpen(open);
  };


  const atualizarLarguraTela = useCallback(() => {
    setIsWideScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    atualizarLarguraTela();

    window.addEventListener('resize', atualizarLarguraTela);

    return () => window.removeEventListener('resize', atualizarLarguraTela);
  }, [atualizarLarguraTela]);

  return (
    <nav
      className={`flex items-center z-[999] md:pt-[5vh] md:pb-[4vh] fixed top-0 left-0 right-0 px-[6vw] transition-all duration-200 justify-between content-center ${
        hasShadow
          ? "drop-shadow-[0_3px_2px_rgba(0,0,0,0.15)] transition-all duration-800 bg-intense-grey"
          : ""
      } ${isWideScreen ? "" : "bg-intense-grey"}`}
    >
      <Logo />
      <div className="hidden md:flex ">
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
