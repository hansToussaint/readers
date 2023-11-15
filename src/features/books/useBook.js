import { useQuery } from "@tanstack/react-query";
import { getSingleBook } from "../../services/apiBooks";
import { useParams } from "react-router-dom";

export function useBook() {
  const { bookId } = useParams();
  // console.log(bookId);

  const {
    isLoading,
    data: book,
    error,
  } = useQuery({
    queryKey: ["book"],
    queryFn: () => getSingleBook(bookId),
    retry: false,
  });

  return { isLoading, error, book };
}
