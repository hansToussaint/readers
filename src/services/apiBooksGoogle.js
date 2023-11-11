import { PAGE_SIZE } from "../utils/contants";

const KEY = "AIzaSyBRkH1NXivDSK5Naaug54runNaOyBd7U3Q";

export async function getBooks(title) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=ebooks&key=${KEY}&maxResults=40`
    );

    const data = await response.json();

    if (!response.ok)
      throw new Error(`Books could not be loaded (${response.status})`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

//
export async function getOrderedBooks(title, orderBy, page) {
  try {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=ebooks&orderBy=${orderBy}&key=${KEY}&startIndex=${from}&maxResults=${to}`
    );

    const allData = await response.json();

    const data = allData.items.slice(from, to);

    if (!response.ok)
      throw new Error(`Books could not be loaded (${response.status})`);

    // if (page) {
    // }

    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

//
export async function getSingleBook(id) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${KEY}`
    );

    const data = await response.json();

    if (!response.ok) throw new Error("Book could not found");

    return data;
  } catch (error) {
    console.log(error);
  }
}
