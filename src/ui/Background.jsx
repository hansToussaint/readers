import styled from "styled-components";

const Img = styled.img`
  display: block;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;

  object-fit: cover;
  object-position: center;
  /* border-radius: 50%; */
  /* outline: 2px solid var(--color-grey-200); */
`;

function Background() {
  const src = "/background.jpg";

  return <Img src={src} alt="background-image" />;
}

export default Background;
