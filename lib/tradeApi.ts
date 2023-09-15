const BaseUrl = "/api/trades";

export async function getAllTrades() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-cache",
    next: { revalidate: 10 },
  });
  const resData = await res.json();
  return resData.trades;
}
