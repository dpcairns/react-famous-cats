const URL = `${}/api`;

console.log('meeeeoooow')
console.log(process.env)
export async function getCats() {
  const url = `${URL}/cats`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
