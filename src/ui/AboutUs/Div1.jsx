import styled from "styled-components";

const Div1 = styled.div`
  background-image: linear-gradient(
    to top,
    var(--color-grey-300),
    var(--bg-color-div-1)
  );

  &:first-child {
    padding-top: 8rem;
  }

  & img {
    width: 14rem;
    height: 14rem;
    top: -5%;
    left: 50%;

    @media screen and (max-width: 1500px) {
      /* top: -4%; */
      width: 12rem;
      height: 12rem;
    }

    @media screen and (max-width: 950px) {
      /* top: -4%; */
      width: 11rem;
      height: 11rem;
    }

    @media screen and (max-width: 600px) {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export default Div1;
