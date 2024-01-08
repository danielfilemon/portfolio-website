import React from "react";
import { useCustomData } from "../utils/CustomData";
import { Link } from "react-router-dom";
import BackToTop from "./BackToTop";

export default function Footer() {
  const customData = useCustomData();

  return (
    <footer className="footer">
      <BackToTop />
      <nav className="footer_icons">
        <li>
          <Link to={`mailto:${customData.socialMedia.email}`}>
            <i className="fa-solid fa-envelope footer-icons" />
          </Link>
        </li>

        <li>
          <Link to={customData.socialMedia.linkedin}>
            <i className="fa-brands fa-linkedin-in footer-icons" />
          </Link>
        </li>

        <li>
          <Link to={customData.socialMedia.github}>
            <i className="fa-brands fa-github footer-icons" />
          </Link>
        </li>

        <li>
          <Link to={customData.socialMedia.devTo}>
            <i className="fa-brands fa-dev footer-icons" />
          </Link>
        </li>
      </nav>

      <p>© 2022 - {new Date().getFullYear()} - All Rights Reserved.</p>
    </footer>
  );
}
