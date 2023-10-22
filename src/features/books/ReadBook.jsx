import { useEffect, useRef } from "react";
import { useBook } from "./useBook";
// import Spinner from "../../ui/Spinner";

function ReadBook() {
  const { book } = useBook();
  const container = useRef();

  window.google.books.load?.();

  useEffect(() => {
    function initialize() {
      const viewer = new window.google.books.DefaultViewer(container.current);
      // viewer.load("ISBN:0738531367");
      viewer.load(book?.id);
    }
    // initialize();
    window.google.books.setOnLoadCallback?.(initialize);
  }, [book?.id]);

  return (
    <div>
      This is the book:
      <div
        ref={container}
        style={{ width: "100rem", height: "100rem", backgroundColor: "grey" }}
      >
        {/* {isLoading && <Spinner />} */}
      </div>
    </div>
  );
}

export default ReadBook;
