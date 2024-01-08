import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <main className="page">
        <h2 className="page_title">Contact Me</h2>

        <section className="page_contact">
          <Link
            to="https://github.com/sarahcssiqueira"
            className="page_contact"
          >
            <i className="fa-brands fa-github contact-icons"></i>
            <p>Github</p>
          </Link>

          <Link
            to="https://www.linkedin.com/in/sarahcssiqueira/"
            className="page_contact"
          >
            <i className="fa-brands fa-linkedin-in contact-icons"></i>
            <p>Reach me on Linkedin</p>
          </Link>

          <Link to="mailto:sarahcosiqueira@gmail.com" className="page_contact">
            <i className="fa-solid fa-envelope contact-icons"></i>
            <p>sarahcosiqueira@gmail.com</p>
          </Link>

          <Link to="https://dev.to/sarahcssiqueira" className="page_contact">
            <i className="fa-brands fa-dev contact-icons"></i>
            <p>Dev.to</p>
          </Link>

          <div className="point-contact">
            <div className="point-contact-item"></div>
            <div className="point-contact-item"></div>
            <div className="point-contact-item"></div>
            <div className="point-contact-item"></div>
            <div className="point-contact-item"></div>
          </div>
        </section>
      </main>
    </>
  );
}
