import { useMutation } from "@tanstack/react-query";
import { signIn as signInApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignIn() {
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signInApi({ email, password }),
    onSuccess: () => {
      navigate("/", { replace: true });
    },

    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { signIn, isLoading };
}
