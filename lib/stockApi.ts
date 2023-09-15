const BaseUrl = "/api/stocks";

export async function getAllStocks() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-cache",
  });
  const resData = await res.json();
  return resData.stocks;
}
