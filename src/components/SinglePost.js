import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${path}`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, [path]);

  return (
    <article key={posts.id} className="post_content">
      <ul className="grid_item_tags">
        <li className="grid_item_tags_tag">{posts.tags}</li>
      </ul>

      <h2 className="post_title">{posts.title}</h2>

      <ul className="grid_item_tags">
        <li className="grid_item_tags_date">
          Published on {posts.readable_publish_date}
        </li>
        <li className="grid_item_tags_date">
          {posts.reading_time_minutes} min read
        </li>
        <li className="grid_item_tags_date">
          Post originally published {""}
          <Link to={`${posts.url}`}>on dev.to</Link>
        </li>
      </ul>
      <Link to={`../post/${posts.slug}/${posts.id}`}>
        <img
          src={posts.social_image}
          alt={posts.title}
          className="grid_item_img"
        ></img>
      </Link>

      <p dangerouslySetInnerHTML={{ __html: posts.body_html }} />
    </article>
  );
}

export default SinglePost;
