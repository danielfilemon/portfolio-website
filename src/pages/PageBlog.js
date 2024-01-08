import React from "react";
import { useCustomData } from "../utils/CustomData";
import PostsList from "../components/PostsList";

export default function PageBlog() {
  const customData = useCustomData();

  return (
    <div>
      <main className="page">
        <h2 className="page_title">Blog</h2>
        <p>{customData.blogPageDesc}</p>
        <PostsList />
      </main>
    </div>
  );
}
