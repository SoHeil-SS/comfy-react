import React from "react";

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
        <header
          style={headerStyle}
          // className="hero"
        >
          <div className="banner">
            <h1 className="banner-title">Furniture Collection</h1>
            <button className="banner-btn">Shop Now</button>
          </div>
        </header>
      </div>

      <div>
        <section className="products">
          <div className="section-title">
            <h2> Our Products</h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
