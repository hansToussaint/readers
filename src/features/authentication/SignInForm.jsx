import { useState } from "react";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import { useSignIn } from "./useSignIn";
import SpinnerMini from "../../ui/SpinnerMini";
import Form from "../../ui/Form";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoading } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    signIn(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Logo />
      <Heading as="h4">Sign in to your account</Heading>

      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button $size="large" disabled={isLoading}>
          {!isLoading ? "Sign in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>

      <Link to="/password-restore">
        <b>Forgot your password?</b>
      </Link>

      <p>
        Don&apos;t have an account?{" "}
        <Link to="/signUp">
          <b>Sign up</b>
        </Link>
      </p>
    </Form>
  );
}

export default SignInForm;
