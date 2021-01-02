import { Spinner } from "react-bootstrap";

const Loader = ({ style }) => {
  return (
    <div>
      <Spinner style={style} animation="border" role="status" variant="danger">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loader;
