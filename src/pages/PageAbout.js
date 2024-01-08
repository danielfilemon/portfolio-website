import React from "react";
import profilePic from "../assets/profilepic.png";

export default function AboutPage() {
  return (
    <>
      <main className="page">
        <figure>
          <img
            src={profilePic}
            alt="profile"
            height="200"
            width="200"
            className="page_img"
          />
        </figure>

        <h2 className="page_title">About</h2>
        <article>
          <p>Hi! I'm Sarah</p>

          <p>
            I am a <b>full stack WordPress developer</b>, building web
            applications since 2015. Started as a freelancer back in 2015, and
            later in 2018 I found my startup which I was responsible for IT and
            sales <b>(sincerely, not sure how is the harder part yet).</b>
          </p>

          <p>
            Curiosity: I am a former accountant and eternal physics student, it
            <b> may seem random </b>
            but in the end, everything connects.
          </p>
        </article>
      </main>
    </>
  );
}
