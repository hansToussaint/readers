import styled from "styled-components";
import SignInForm from "../features/authentication/SignInForm";

const Header = styled.header`
  min-height: 23vh;
  background-image: url("/header-image-2.jpg");
  background-size: cover;
  background-position: top;

  @media screen and (max-width: 500px) {
    min-height: 10vh;
  }
`;

const SignInLayout = styled.main`
  min-height: 77vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  /* gap: 3.2rem; */
  background-color: var(--color-grey-100);

  & p {
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    min-height: 90vh;
    padding: 2rem;
    grid-template-columns: auto;
  }
`;

function SignIn() {
  return (
    <>
      <Header></Header>
      <SignInLayout>
        <SignInForm />
      </SignInLayout>
    </>
  );
}

export default SignIn;
