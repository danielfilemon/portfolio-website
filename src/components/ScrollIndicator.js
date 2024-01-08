import { useState } from "react";

const ScrollIndicatorLight = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPercent = (winScroll / maxHeight) * 100;
    setScroll(scrolledPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div className="scroll-container">
      <div style={{ width: `${scroll}%` }} className="scroll-indicator"></div>
    </div>
  );
};
export default ScrollIndicatorLight;
