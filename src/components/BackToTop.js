import React from "react";
import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <TiArrowSortedUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="back-to-top"
      />
    </div>
  );
};

export default BackToTop;
