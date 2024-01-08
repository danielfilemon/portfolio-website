import React from "react";
import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="footer">
      <BackToTop />
      <nav className="footer_icons">
        <li>
          <Link to="mailto:sarahcosiqueira@gmail.com">
            <i className="fa-solid fa-envelope footer-icons" />
          </Link>
        </li>

        <li>
          <Link to="https://linkedin.com/in/sarahcssiqueira/">
            <i className="fa-brands fa-linkedin-in footer-icons" />
          </Link>
        </li>

        <li>
          <Link to="https://github.com/sarahcssiqueira">
            <i className="fa-brands fa-github footer-icons" />
          </Link>
        </li>

        <li>
          <Link to="https://dev.to/sarahcssiqueira">
            <i className="fa-brands fa-dev footer-icons" />
          </Link>
        </li>
      </nav>

      <p>© 2022 - {new Date().getFullYear()} - All Rights Reserved.</p>
    </footer>
  );
}
