import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function NavbarLight() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navbar-mobile">
      <button onClick={handleToggle}>
        {navbarOpen ? <MdClose /> : <TiThMenu />}
      </button>

      <ul className={`menu-nav ${navbarOpen ? " show-menu" : ""}`}>
        <li className="close-button" onClick={() => closeMenu()}>
          <MdClose />
        </li>

        <Link to="/" className="header_link_mobile">
          <li onClick={() => closeMenu()}>Home</li>
        </Link>

        <Link to="/blog" className="header_link_mobile">
          <li onClick={() => closeMenu()}>Blog</li>
        </Link>

        <Link to="/code-samples" className="header_link_mobile">
          <li>Code Samples</li>
        </Link>

        <Link to="/about" className="header_link_mobile">
          <li onClick={() => closeMenu()}>About</li>
        </Link>

        <Link to="/contact" className="header_link_mobile">
          <li onClick={() => closeMenu()}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
