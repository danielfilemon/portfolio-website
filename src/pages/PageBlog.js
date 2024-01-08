import React from "react";
import PostsList from "../components/PostsList";

export default function PageBlog() {
  return (
    <div>
      <main className="page">
        <h2 className="page_title">Blog</h2>
        <p>
          I write content about technology, programming, and sometimes, how I
          see the world. The main goal is writing for my own future reference
          (and avoid spending hours "googling" for stuff I forgot), but I also
          hope something to be useful for other developers.
        </p>
        <PostsList />
      </main>
    </div>
  );
}
