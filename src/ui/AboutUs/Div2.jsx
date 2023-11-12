import styled from "styled-components";

const Div2 = styled.div`
  background-image: linear-gradient(
    to right top,
    var(--bg-color-1),
    var(--bg-color-div-2)
  );

  & img {
    width: 15rem;
    height: 15rem;
    top: -5%;
    left: 50%;

    @media screen and (max-width: 1300px) {
      top: -4%;
    }

    @media screen and (max-width: 1200px) {
      top: -3%;
    }
  }
`;

export default Div2;
