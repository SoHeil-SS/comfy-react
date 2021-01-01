const FactorHeader = ({ handleFactorVisibility }) => {
  return (
    <>
      <span className="close-cart">
        <i className="far fa-window-close" onClick={handleFactorVisibility}></i>
      </span>
      <h2>Your Carts</h2>
    </>
  );
};
export default FactorHeader;
