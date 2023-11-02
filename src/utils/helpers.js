export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// export const formatCurrency = (value) =>
//   new Intl.NumberFormat("en", { style: "currency", currency: "RUB" }).format(
//     value
//   );
