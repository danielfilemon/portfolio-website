import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import NotFound from "../pages/Page404";
import PageBlog from "../pages/PageBlog";
import PageGithub from "../pages/PageGithub";
import PageSinglePost from "../pages/PageSinglePost";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="blog" element={<PageBlog />} />
      <Route path="/post/:slug/:id" element={<PageSinglePost />} />
      <Route path="code-samples" element={<PageGithub />} />
      <Route path="about" element={<PageAbout />} />
      <Route path="contact" element={<PageContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
