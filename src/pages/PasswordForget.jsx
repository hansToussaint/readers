import styled from "styled-components";
import PasswordRestore from "../features/authentication/PasswordRestore";

const Styled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 55rem;
  align-content: center;
  justify-content: center;
  /* gap: 3.2rem; */
  background-color: var(--color-grey-100);
`;

function PasswordForget() {
  return (
    <Styled>
      <PasswordRestore />
    </Styled>
  );
}

export default PasswordForget;
