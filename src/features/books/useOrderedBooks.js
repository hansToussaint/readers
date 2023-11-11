import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getOrderedBooks } from "../../services/apiBooks";

export function useOrderedBooks() {
  // const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  //Sort
  // const orderBy = searchParams.get("orderBy") || "";

  //Pagination
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  // console.log(page);

  //Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => getOrderedBooks(searchQuery),
  });

  //PRE-FETCHING
  // const pageCount = Math.ceil();
  // if (page < pageCount)
  // queryClient.prefetchQuery({
  //   queryKey: ["orderedBooks", searchQuery, orderBy, page + 1],
  //   queryFn: () => getOrderedBooks(searchQuery, orderBy, page + 1),
  // });

  // //
  // // if (page < pageCount)
  // queryClient.prefetchQuery({
  //   queryKey: ["orderedBooks", searchQuery, orderBy, page - 1],
  //   queryFn: () => getOrderedBooks(searchQuery, orderBy, page - 1),
  // });

  return { isLoading, data, error };
}
