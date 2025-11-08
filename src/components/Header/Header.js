import React, { useState } from "react";
import "./Header.css";
import menuOpenIcon from "../../assets/navbar/menu_open.svg";
import menuCloseIcon from "../../assets/navbar/menu_close.svg";
import mailIcon from "../../assets/navbar/mail.svg";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="app-header">

      {/* Header logo */}
      <img src={logo} alt="V Films" />

        {/* Menu open Icon */}
        <button className={`open-btn ${menuOpen ? "deactive" : "active"}`} onClick={toggleMenu}>
            <img src={menuOpenIcon} alt="Menu Open Icon" />
        </button>

      {/* Nav Menu */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#stories" onClick={() => setMenuOpen(false)}>Their Stories</a>
        <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#varnan" onClick={() => setMenuOpen(false)}>Varnan</a>

        <button className="talk-btn">
          Let’s Talk <img src={mailIcon} alt="Contact"/>
        </button>

        <button className={`close-btn ${menuOpen ? "active" : "deactive"}`} onClick={toggleMenu}>
            <img src={menuCloseIcon} alt="Menu Close Icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
