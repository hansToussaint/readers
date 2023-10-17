const KEY = "AIzaSyBHEJFy_MWLEXpsEi-2cIyWpZMcxGPCunk";

export async function getBooks(id) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${id}&filter=ebooks&key=${KEY}&maxResults=40`
    );

    const data = await response.json();

    if (!response.ok)
      throw new Error(`Books could not be loaded (${response.status})`);

    return data;
  } catch (error) {
    console.log(error);
  }
}
