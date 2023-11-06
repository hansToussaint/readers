import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signOut as signOutApi } from "../../services/apiAuth";

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signOut, isLoading } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { signOut, isLoading };
}
