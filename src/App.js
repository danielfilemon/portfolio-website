import React from "react";
import "./styles/style.css";
import Router from "./utils/Router";
import { UserInfo } from "./utils/CustomData";

import Header from "./components/Header";
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <UserInfo>
        <Header />
        <ScrollIndicator />
        <Router />
        <Footer />
      </UserInfo>
    </>
  );
}
