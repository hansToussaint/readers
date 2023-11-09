import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import FileInput from "../../ui/FileInput";
import { useUpadateUser } from "./useUpdateUser";
import toast from "react-hot-toast";

function UpdateAccount() {
  const { user } = useUser();

  const email = user?.email;
  const currentFullName = user?.user_metadata?.fullname;

  const { updateUser, isUpdating } = useUpadateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return toast.error("Please enter your Full name");

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  return (
    <Form $variation="secondary" onSubmit={handleSubmit}>
      <FormRowVertical label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address">
        <Input type="text" value={email} disabled />
      </FormRowVertical>

      <FormRowVertical label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isUpdating}>Update Account</Button>
      </FormRowVertical>
    </Form>
  );
}

export default UpdateAccount;
