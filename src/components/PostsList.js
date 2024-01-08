import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=sarahcssiqueira"
        );

        if (!response.ok) {
          throw new Error("HTTP error! Status: ${response.status}");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
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
  );
}

export default PostsList;
