import { IP_URL } from "../constants";

export async function getAddress(ip = "8.8.8.8") {
  const res = await fetch(`${IP_URL}${ip}`);

  const data = await res.json();

  return data;
}
