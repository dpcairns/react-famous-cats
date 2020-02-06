const URL = "http://localhost:3001/api";

export async function getCats() {
  const url = `${URL}/cats`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
