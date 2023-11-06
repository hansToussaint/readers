import { useEffect, useRef } from "react";
import { useBook } from "./useBook";
// import Spinner from "../../ui/Spinner";

function ReadBook() {
  const { book } = useBook();

  const container = useRef();

  useEffect(function () {
    const scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.src = "https://www.google.com/books/jsapi.js";

    document.head.append(scriptTag);
  }, []);

  useEffect(() => {
    // window.google.books.load?.();

    console.log(window.google.books.load());

    // if (window.google.books.load) {
    //   console.log("ok");
    // } else {
    //   console.log("ou fo ttbon");
    // }

    // function initialize() {
    //   const viewer = new window.google.books.DefaultViewer(container.current);
    //   // viewer.load("ISBN:0738531367");
    //   viewer.load(book?.id);
    //   console.log(viewer);
    // }
    // initialize();
    // window.google.books.setOnLoadCallback?.(initialize);
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
