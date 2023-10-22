import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { useSearchParams } from "react-router-dom";

export function useBooks() {
  // const title = "magic";

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");
  console.log(searchQuery);

  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(searchQuery),
  });

  return { isLoading, data, error };
}
