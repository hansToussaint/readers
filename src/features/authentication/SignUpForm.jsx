import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";
import { useState } from "react";
import styled from "styled-components";

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  background-color: var(--color-grey-0);

  padding: 1.2rem 2rem;

  & button {
    width: 100%;
  }

  & span {
    font-weight: 700;
  }
`;

function SignUpForm() {
  const [messageOnSuccess, setMessageOnSuccess] = useState(false);
  const navigate = useNavigate();

  const { signUp, isLoading } = useSignUp();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: () => reset(),
        onSuccess: () => setMessageOnSuccess(true),
      }
    );
  }

  return (
    <>
      {messageOnSuccess ? (
        <Message>
          <Heading as="h1">Verify your email</Heading>

          <p>We just sent a verification link to your email adress</p>

          <Button $size="large" onClick={() => navigate("/signin")}>
            Back to Sign in
          </Button>
        </Message>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <Heading as="h4">Create your account</Heading>

          <FormRowVertical label="Full name" error={errors?.fullName?.message}>
            <Input
              type="text"
              id="fullName"
              {...register("fullName", { required: "This field is required" })}
              disabled={isLoading}
            />
          </FormRowVertical>

          <FormRowVertical label="Email address" error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valide email address",
                },
              })}
              disabled={isLoading}
            />
          </FormRowVertical>

          <FormRowVertical
            label="Password (min 8 characters)"
            error={errors?.password?.message}
          >
            <Input
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimun of 8 characters",
                },
              })}
              disabled={isLoading}
            />
          </FormRowVertical>

          <FormRowVertical
            label="Confirm password"
            error={errors?.passwordConfirm?.message}
          >
            <Input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: {
                  value: (value) =>
                    value === getValues().password ||
                    "Passwords needs to match",
                },
              })}
              disabled={isLoading}
            />
          </FormRowVertical>

          <FormRowVertical>
            <Button $variation="secondary" type="reset" disabled={isLoading}>
              Cancel
            </Button>
            <Button disabled={isLoading}>Create account</Button>
          </FormRowVertical>

          <p>
            Already have an account?{" "}
            <Link to="/signin">
              <b>Sign in</b>
            </Link>
          </p>
        </Form>
      )}
    </>
  );
}

export default SignUpForm;
