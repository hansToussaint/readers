import styled from "styled-components";
import { BsChevronUp } from "react-icons/bs";
import { useEffect, useState } from "react";

const StyledButtonScroll = styled.button`
  z-index: 10;
  position: fixed;
  bottom: 3%;
  right: 3%;

  width: 5rem;
  height: 5rem;

  border-radius: 100px;
  border: none;

  &:focus {
    outline: none;
  }

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-grey-400);

    &:hover {
      color: var(--color-brand-50);
    }
  }

  background-color: var(--color-brand-dark);
`;

function ScrollToTop() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 400) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {scrollUp && (
        <StyledButtonScroll onClick={goUp}>
          <BsChevronUp />
        </StyledButtonScroll>
      )}
    </>
  );
}

export default ScrollToTop;
