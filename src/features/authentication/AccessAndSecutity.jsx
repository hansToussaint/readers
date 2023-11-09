import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useUpadateUser } from "./useUpdateUser";

function AccessAndSecutity() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpadateUser();

  function onSubmit({ password }) {
    updateUser(
      { password },
      {
        onSuccess: reset,
      }
    );
  }

  return (
    <Form $variation="secondary" onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="New password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimun of 9 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Password need to match",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRowVertical>
    </Form>
  );
}

export default AccessAndSecutity;
