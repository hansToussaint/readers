import { TfiLayoutGrid3, TfiViewList } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";
import { useBooks } from "../features/books/useBooks";
import { useViewResults } from "../context/ViewResultsContext";
import { useState } from "react";

const StyledMenu = styled.div`
  width: 100%;
  padding: 0.6rem 0;
  margin: 2.7rem 1.5rem;
  border-bottom: 1px solid var(--color-grey-200);
  border-top: 1px solid var(--color-grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;
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
      props.active &&
      css`
        color: var(--color-brand-500);
        background-color: var(--color-grey-200);
        border-radius: var(--border-radius-sm);
      `}
  }
`;

const SortDiv = styled.div`
  display: flex;
  gap: 0.58rem;
  align-items: center;
`;

function ResultsBooksMenu() {
  const [curOpen] = useState(true);
  const { data, searchQuery } = useBooks();
  const { isLargeView, largeView, smallView } = useViewResults();

  console.log(isLargeView === curOpen);

  return (
    <StyledMenu>
      <div>
        <ButtonSVG active={isLargeView === curOpen}>
          <TfiViewList onClick={largeView} />
        </ButtonSVG>

        <ButtonSVG active={isLargeView === !curOpen}>
          <TfiLayoutGrid3 onClick={smallView} />
        </ButtonSVG>
      </div>
      <p>
        Showing 1-10 of {data?.totalItems} results for <i>{searchQuery}</i>
      </p>
      <SortDiv>
        <span>Sort By</span>
        <IoIosArrowDown />
      </SortDiv>
    </StyledMenu>
  );
}

export default ResultsBooksMenu;
