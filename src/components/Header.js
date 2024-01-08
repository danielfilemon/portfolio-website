import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

export default function HeaderLight() {
  return (
    <nav className="header">
      <Link className="header_title" to="/">
        <img src={logo} alt="logo" height={60} width={60} />
        <h1 className="header_featured"> Sarah </h1>
      </Link>

      <Navbar />

      <nav className="navbar-desktop">
        <ul className="navbar-desktop">
          <Link to="/" className="header_link">
            <li>Home</li>
          </Link>

          <Link to="/blog" className="header_link">
            <li>Blog</li>
          </Link>

          <Link to="/code-samples" className="header_link">
            <li>Code Samples</li>
          </Link>

          {/* <Link to="/projects" className="header_link">
            <li>Projects</li>
          </Link> */}

          <Link to="/about" className="header_link">
            <li>About</li>
          </Link>

          <Link to="/contact" className="header_link">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </nav>
  );
}
