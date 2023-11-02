import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/contants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  gap: 2rem;

  font-weight: 500;
  font-size: 1.8rem;

  background-color: var(--color-grey-50);
  transition: all 0.3s;
`;

const Pages = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  & li {
    &:hover {
      border-bottom: 1px solid var(--color-grey-500);
    }

    display: block;
    margin: auto;
    text-align: center;
    width: 3rem;
    border-bottom: ${(props) =>
      props.active ? "2px solid var(--color-grey-500)" : "none"};
  }
`;

const PaginationButton = styled.button`
  /* background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")}; */

  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    /* background-color: var(--color-brand-500);
    color: var(--color-brand-50); */
    border-bottom: 1px solid var(--color-grey-500);
  }
`;

/*eslint-disable react/prop-types */
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  // console.log(pageCount);

  return (
    <StyledPagination>
      <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
        <HiChevronLeft />
      </PaginationButton>
      <Pages>
        {/* {pageCount} */}
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
        <li>
          <a>4</a>
        </li>
      </Pages>
      <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
        <HiChevronRight />
      </PaginationButton>
    </StyledPagination>
  );
}

export default Pagination;
