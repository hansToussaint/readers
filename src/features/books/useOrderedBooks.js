import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getOrderedBooks } from "../../services/apiBooks";
import { PAGE_SIZE } from "../../utils/contants";

export function useOrderedBooks(id) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  //Sort
  const sort = searchParams.get("sort") || "";

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  // console.log(page);

  //Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["books", searchQuery, sort, page],
    queryFn: () => getOrderedBooks(searchQuery || id, sort, page),
  });

  const count = data?.numFound;

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["books", searchQuery, sort, page + 1],
      queryFn: () => getOrderedBooks(searchQuery, sort, page + 1),
    });

  //
  if (page > pageCount)
    queryClient.prefetchQuery({
      queryKey: ["books", searchQuery, sort, page - 1],
      queryFn: () => getOrderedBooks(searchQuery, sort, page - 1),
    });

  return { isLoading, data, error };
}
