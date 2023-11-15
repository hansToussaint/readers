// import { PAGE_SIZE } from "../utils/contants";

export async function getOrderedBooks(title) {
  try {
    // const from = (page - 1) * PAGE_SIZE;
    // const to = from + PAGE_SIZE;

    const response = await fetch(
      `https://openlibrary.org/search.json?mode=ebooks&has_fulltext=true&q=${title}`
    );

    const data = await response.json();

    if (!response.ok)
      throw new Error(`Books could not be loaded (${response.status})`);

    // console.log(data.docs);

    return data;
  } catch (error) {
    console.log(error);
  }
}

//
export async function getSingleBook(id) {
  try {
    const response = await fetch(`https://openlibrary.org/works/${id}.json`);

    const data = await response.json();

    if (!response.ok) throw new Error("Book could not found");

    return data;
  } catch (error) {
    console.log(error);
  }
}
