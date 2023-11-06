import styled from "styled-components";
import SignUpForm from "../features/authentication/SignUpForm";

const SignUpLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 55rem;
  align-content: center;
  justify-content: center;
  /* gap: 3.2rem; */
  background-color: var(--color-grey-100);
`;

function SignUp() {
  return (
    <SignUpLayout>
      <SignUpForm />
    </SignUpLayout>
  );
}

export default SignUp;
