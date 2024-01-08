import React from "react";
import { useCustomData } from "../utils/CustomData";
import profilePic from "../assets/profilepic.png";

export default function AboutPage() {
  const customData = useCustomData();

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
          <p>Hi! I'm {customData.name}</p>

          <p>{customData.longDescription}</p>
        </article>
      </main>
    </>
  );
}
