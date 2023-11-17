// export const formatCurrency = (value) =>
//   new Intl.NumberFormat("en", { style: "currency", currency: "RUB" }).format(
//     value
//   );

export const getLanguage = (code) => {
  const language = new Intl.DisplayNames(["en"], { type: "language" });
  return language.of(code);
};
