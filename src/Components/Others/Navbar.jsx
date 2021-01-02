const Navbar = ({ children }) => {
  return (
    <nav className="navbar" style={{ position: "fixed" }}>
      <div className="navbar-center ">{children}</div>
    </nav>
  );
};

export default Navbar;
