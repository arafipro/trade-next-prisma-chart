const BaseUrl = "/api/stocks";

export async function getAllStocks() {
  const res = await fetch(`${BaseUrl}`, {
    next: { revalidate: 10 },
  });
  const resData = await res.json();
  return resData.stocks;
}
