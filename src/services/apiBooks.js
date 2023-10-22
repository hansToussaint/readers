const KEY = "AIzaSyBHEJFy_MWLEXpsEi-2cIyWpZMcxGPCunk";

export async function getBooks(title) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=free-ebooks&key=${KEY}&maxResults=40`
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
