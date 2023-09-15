const BaseUrl = "http://localhost:3000/api/stocks";

export async function getAllStocks() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-cache",
  });
  const resData = await res.json();
  return resData.stocks;
}
