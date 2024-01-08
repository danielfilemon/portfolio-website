import React from "react";
import { useCustomData } from "../utils/CustomData";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const customData = useCustomData();

  return (
    <>
      <main className="page">
        <h2 className="page_title">Contact Me</h2>

        <section className="page_contact">
          <Link to={customData.socialMedia.github} className="page_contact">
            <i className="fa-brands fa-github contact-icons"></i>
            <p>Github</p>
          </Link>

          <Link to={customData.socialMedia.linkedin} className="page_contact">
            <i className="fa-brands fa-linkedin-in contact-icons"></i>
            <p>Reach me on Linkedin</p>
          </Link>

          <Link
            to={`mailto:${customData.socialMedia.email}`}
            className="page_contact"
          >
            <i className="fa-solid fa-envelope contact-icons"></i>
            <p>{customData.socialMedia.email}</p>
          </Link>

          <Link to={customData.socialMedia.devTo} className="page_contact">
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
