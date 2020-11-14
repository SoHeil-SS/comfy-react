import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <Spinner
      style={{
        marginLeft: "42%",
        marginTop: "20%",
        width: "250px",
        height: "250px",
      }}
      animation="border"
      role="status"
      variant="danger"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
export default Loading;
