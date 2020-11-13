import React from "react";
import { ScrollTo } from "react-scroll-to";

const Header = () => {
  const headerStyle = {
    minHeight: "calc(100vh - 60px)",
    background: "url('./images/hero-bcg.jpeg') center/cover no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div>
        <header style={headerStyle}>
          <div className="banner">
            <h1 className="banner-title">Furniture Collection</h1>
            <ScrollTo>
              {({ scroll }) => (
                <button
                  className="banner-btn"
                  onClick={() =>
                    setTimeout(() => {
                      scroll({ y: 1500 });
                    }, 300)
                  }
                >
                  Shop Now
                </button>
              )}
            </ScrollTo>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
