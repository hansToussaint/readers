const KEY = "fca_live_SRJAAeQhUGFGVhEsoCKBIYynHeCLGH1k5vWz6Cxv";

export async function moneyConverterToUSD(currency, amount) {
  try {
    const res = await fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=${KEY}`
    );

    const data = await res.json();

    const result = (Number(amount) * data.data["USD"]) / data.data[currency];

    return result;
  } catch (err) {
    console.log(err);
  }
}
