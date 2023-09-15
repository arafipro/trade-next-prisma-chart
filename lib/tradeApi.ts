const BaseUrl = "http://localhost:3000/api/trades";

export async function getAllTrades() {
  const res = await fetch(`${BaseUrl}`, {
    cache: "no-cache",
  });
  const resData = await res.json();
  return resData.trades;
}
