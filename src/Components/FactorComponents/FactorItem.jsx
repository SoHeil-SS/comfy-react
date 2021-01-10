import { Button } from "react-bootstrap";

const FactorItem = ({
  title,
  total,
  image,
  inCart,
  actionIncCart,
  actionDecCart,
  actionRemoveCart,
}) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title} </h4>
        <h5>{total}</h5>
        <Button variant="outline-danger" onClick={actionRemoveCart}>
          Remove
        </Button>
      </div>
      <div>
        <i className="fas fa-chevron-up" onClick={actionIncCart} />
        <p className="item-amount">{inCart}</p>
        <i className="fas fa-chevron-down" onClick={actionDecCart} />
      </div>
    </div>
  );
};

export default FactorItem;
