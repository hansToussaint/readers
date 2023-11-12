import styled from "styled-components";

const Div3 = styled.div`
  background-image: linear-gradient(
    to right bottom,
    var(--bg-color-1),
    var(--bg-color-div-3)
  );

  & img {
    width: 15rem;
    height: 10rem;

    top: -11%;
    left: 50%;

    @media screen and (max-width: 1700px) {
      top: -7%;
    }

    @media screen and (max-width: 1300px) {
      top: -5%;
    }

    @media screen and (max-width: 1200px) {
      top: -6%;
    }

    @media screen and (max-width: 950px) {
      top: -4%;
      width: 13rem;
      height: 7rem;
    }

    @media screen and (max-width: 900px) {
      top: -6%;
    }

    @media screen and (max-width: 450px) {
      top: -6%;
    }

    @media screen and (max-width: 350px) {
      top: -5%;
    }

    @media screen and (max-width: 350px) {
      top: -3.5%;

      width: 13rem;
      height: 7rem;
    }
  }
`;

export default Div3;
