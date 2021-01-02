import React from "react";
import { ScrollTo } from "react-scroll-to";

import { handleScrollTo } from "../Events/mainEvents";

const Header = () => {
  return (
    <header className="hero">
      <div className="banner">
        <h1 className="banner-title">Furniture Collection</h1>
        <ScrollTo>
          {({ scroll }) => (
            <button
              className="banner-btn"
              onClick={() => handleScrollTo(scroll)}
            >
              Shop Now
            </button>
          )}
        </ScrollTo>
      </div>
    </header>
  );
};

export default Header;
