import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { useSearchParams } from "react-router-dom";

export function useBooks() {
  // const title = "magic";

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");

  const { isLoading, data, error } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => getBooks(searchQuery),
  });

  return { isLoading, data, error, searchQuery };
}
