import { createContext, useContext, useState } from "react";

const ViewResultsContext = createContext();

/*eslint-disable react/prop-types*/
function ViewResultsProvider({ children }) {
  const [isLargeView, setIsLargeView] = useState(true);

  function largeView() {
    setIsLargeView(true);
  }

  function smallView() {
    setIsLargeView(false);
  }

  return (
    <ViewResultsContext.Provider value={{ isLargeView, largeView, smallView }}>
      {children}
    </ViewResultsContext.Provider>
  );
}

function useViewResults() {
  const context = useContext(ViewResultsContext);

  if (context === undefined)
    throw new Error(
      "ViewResultsContext was used outside of ViewResultsProvider"
    );

  return context;
}

export { ViewResultsProvider, useViewResults };
