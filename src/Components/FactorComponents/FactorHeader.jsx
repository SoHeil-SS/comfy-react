import { Button } from "react-bootstrap";

const FactorHeader = ({ handleFactorVisibility }) => {
  return (
    <>
      <span className="close-cart">
        <Button variant="danger" onClick={handleFactorVisibility}>
          X
        </Button>
      </span>
      <h2>Your Carts</h2>
    </>
  );
};
export default FactorHeader;
