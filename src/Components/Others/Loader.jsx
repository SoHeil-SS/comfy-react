import Spinner from "react-bootstrap/Spinner";

const Loader = ({ style, loadingText }) => {
  return (
    <div>
      <Spinner style={style} animation="border" role="status">
        <span>{loadingText}</span>
      </Spinner>
    </div>
  );
};
export default Loader;
