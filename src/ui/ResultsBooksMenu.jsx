import styled, { css } from "styled-components";
import { TfiLayoutGrid3, TfiViewList } from "react-icons/tfi";
// import { useBooks } from "../features/books/useBooks";
import { useViewResults } from "../context/ViewResultsContext";
import SortBy from "./SortBy";
import { useOrderedBooks } from "../features/books/useOrderedBooks";
import Empty from "./Empty";
import { useMediaQuery } from "react-responsive";
// import { useSearchParams } from "react-router-dom";
// import { PAGE_SIZE } from "../utils/contants";

const StyledMenu = styled.div`
  width: 100%;
  padding: 0.6rem 0;
  margin: 2.7rem 1.5rem;
  border-bottom: 1px solid var(--color-grey-200);
  border-top: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const ButtonSVG = styled.button`
  width: 4.3rem;
  height: 4.3rem;
  border: none;
  background-color: transparent;
  border-radius: 5px;

  margin: 0.05rem;

  &:focus {
    outline: none;
  }

  & svg {
    display: block;
    margin: 0 auto;
    text-align: center;

    width: 4.1rem;
    height: 4.1rem;
    color: var(--color-grey-400);
    cursor: pointer;
    transition: all 0.3s;

    padding: 0.8rem 0.6rem;

    ${(props) =>
      props.$active &&
      css`
        color: var(--color-brand-500);
        background-color: var(--color-grey-100);
        border-radius: var(--border-radius-sm);
      `}
  }
`;

function ResultsBooksMenu() {
  // RESPONSIVE
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const { data } = useOrderedBooks();
  const { isLargeView, largeView, smallView } = useViewResults();

  // const [searchParams] = useSearchParams();

  const noData = JSON.stringify(data) === "{}";

  const count = data?.numFound;
  // const currentPage = !searchParams.get("page")
  //   ? 1
  //   : Number(searchParams.get("page"));

  // const pageCount = Math.ceil(count / PAGE_SIZE);
  // // console.log(pageCount);

  if (noData) return <Empty resourceName="results" />;

  return (
    <StyledMenu>
      {isDesktop && (
        <div>
          <ButtonSVG $active={isLargeView}>
            <TfiViewList onClick={largeView} />
          </ButtonSVG>

          <ButtonSVG $active={!isLargeView}>
            <TfiLayoutGrid3 onClick={smallView} />
          </ButtonSVG>
        </div>
      )}
      <p>
        {/* Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span>-
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "} */}
        Found {count} results for <i>{data?.q}</i>
      </p>
      <SortBy
        options={[
          { value: "random", label: "Random" },
          { value: "new", label: "Publication Date" },
          { value: "rating", label: "Average" },
        ]}
      />
    </StyledMenu>
  );
}

export default ResultsBooksMenu;
