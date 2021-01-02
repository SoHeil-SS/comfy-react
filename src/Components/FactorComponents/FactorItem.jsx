import { Button } from "react-bootstrap";

const FactorItem = ({
  title,
  total,
  image,
  inCart,
  handleIncDecProduct,
  handleRemoveProduct,
}) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title} </h4>
        <h5>{total}</h5>
        <Button variant="outline-danger" onClick={handleRemoveProduct}>
          Remove
        </Button>
      </div>
      <div>
        <i
          className="fas fa-chevron-up"
          onClick={() => handleIncDecProduct(+1)}
        />
        <p className="item-amount">{inCart}</p>
        <i
          className="fas fa-chevron-down"
          onClick={() => handleIncDecProduct(-1)}
        />
      </div>
    </div>
  );
};

export default FactorItem;
