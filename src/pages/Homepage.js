import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilepic.png";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=sarahcssiqueira&per_page=3")
      .then((res) => res.json())
      .then((res) => {
        setArticles(res);
      });
  }, []);

  return (
    <>
      <section className="front">
        <section class="front_content">
          <p className="front_content">Hi there 👋! I'm Sarah</p>
          <h1 className="front_featured">Full Stack WordPress Developer</h1>
          <p className="front_content">
            Open source enthusiast, since 2015 I work building web applications,
            WordPress Themes, Gutenberg Blocks, React applications & others.
          </p>

          <ul className="front_list">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <p>Brazil</p>
            </li>
          </ul>

          <div className="front_buttons">
            <button className="front_button" title="about">
              <Link to="/contact">Contact Me</Link>
            </button>

            <div className="front_icons">
              <Link to="mailto:sarahcosiqueira@gmail.com">
                <i className="fa-solid fa-envelope" />
              </Link>

              <Link to="https://linkedin.com/in/sarahcssiqueira/">
                <i className="fa-brands fa-linkedin-in" />
              </Link>

              <Link to="https://github.com/sarahcssiqueira">
                <i className="fa-brands fa-github" />
              </Link>

              <Link to="https://dev.to/sarahcssiqueira">
                <i className="fa-brands fa-dev" />
              </Link>
            </div>
          </div>
        </section>

        <section className="front_picture">
          <figure className="front_picture">
            <img
              src={profilePic}
              alt="profile"
              height="250"
              width="250"
              className="page_img"
            />
            <div className="point">
              <div className="point-item"></div>
              <div className="point-item"></div>
              <div className="point-item"></div>
              <div className="point-item"></div>
              <div className="point-item"></div>
            </div>
          </figure>
        </section>

        <section className="gradient">
          <div className="circle-gradient"></div>
          <div className="circle-gradient"></div>
        </section>
      </section>

      <section className="front_posts">
        <h1 className="page_title">Latest posts</h1>

        <section className="grid">
          {articles.map((article) => {
            return (
              <article key={article.id} className="grid_item">
                <Link
                  to={`../post/${article.slug}/${article.id}`}
                  className="grid_item_title"
                >
                  <img
                    src={article.social_image}
                    alt={article.title}
                    className="grid_item_img"
                  ></img>
                </Link>

                <ul className="grid_item_tags">
                  <li className="grid_item_tags_tag">{article.tags}</li>
                </ul>

                <Link
                  to={`../post/${article.slug}/${article.id}`}
                  className="grid_item_title"
                >
                  {article.title}
                </Link>

                <ul className="grid_item_tags">
                  <li className="grid_item_tags_date">
                    {article.readable_publish_date}
                  </li>
                  <li className="grid_item_tags_date">
                    {article.reading_time_minutes} min read
                  </li>
                </ul>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}
