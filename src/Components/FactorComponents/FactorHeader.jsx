import { Button } from "react-bootstrap";

const FactorHeader = ({ actionFactorVisibility }) => {
  return (
    <>
      <span className="close-cart">
        <Button variant="danger" onClick={actionFactorVisibility}>
          X
        </Button>
      </span>
      <h2>Your Carts</h2>
    </>
  );
};
export default FactorHeader;
