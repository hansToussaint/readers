export function useCoverMedium(coverId) {
  const coverMedium = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  return coverMedium;
}

export function useCoverLarge(coverId) {
  const coverLarge = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;

  return coverLarge;
}
