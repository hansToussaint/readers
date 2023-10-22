import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";

export function useBooks() {
  const title = "mountain view";

  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(title),
  });

  return { isLoading, data, error };
}
