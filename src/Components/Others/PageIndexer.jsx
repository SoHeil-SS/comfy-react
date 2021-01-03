import { Button } from "react-bootstrap";

function PageIndexer({ nextDisabled, prevDisabled, handlePageIndex }) {
  return (
    <div className="page-indexer">
      <Button
        variant="outline-secondary"
        onClick={() => handlePageIndex(-1)}
        disabled={prevDisabled}
      >
        Prev
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => handlePageIndex(+1)}
        disabled={nextDisabled}
      >
        Next
      </Button>
    </div>
  );
}

export default PageIndexer;
