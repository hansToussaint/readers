import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { usePasswordRestore } from "./usePasswordRestore";
import toast from "react-hot-toast";

function PasswordRestore() {
  const [email, setEmail] = useState("");

  const { emailPasswordRestore, errorEmailPasswordRestore } =
    usePasswordRestore();
  console.log(errorEmailPasswordRestore);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email);

    emailPasswordRestore(
      { email },
      {
        onSuccess: () =>
          toast.success("Check your email to reset your password"),
      }
    );

    setEmail("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h1">Enter your email:</Heading>

      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button>Send</Button>
    </Form>
  );
}

export default PasswordRestore;
