import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../services/apiAuth";

export function usePasswordRestore() {
  const { mutate: emailPasswordRestore, error: errorEmailPasswordRestore } = useMutation({
    mutationFn: forgotPassword,
  });

  

  return { emailPasswordRestore, errorEmailPasswordRestore };
}
