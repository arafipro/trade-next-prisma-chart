const BaseUrl = "/api/trades";

export async function getAllTrades() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-cache",
  });
  const resData = await res.json();
  return resData.trades;
}
