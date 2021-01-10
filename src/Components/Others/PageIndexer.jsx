import { Button } from "react-bootstrap";

function PageIndexer({ nextDisabled, prevDisabled, actionPageIndex }) {
  return (
    <div className="page-indexer">
      <Button
        variant="outline-secondary"
        onClick={() => actionPageIndex(-1)}
        disabled={prevDisabled}
      >
        Prev
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => actionPageIndex(+1)}
        disabled={nextDisabled}
      >
        Next
      </Button>
    </div>
  );
}

export default PageIndexer;
