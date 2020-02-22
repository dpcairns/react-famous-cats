<<<<<<< HEAD
const URL = `https://new-cats-db-danny.herokuapp.com/api`;

=======
const URL = `${}/api`;

console.log('meeeeoooow')
console.log(process.env)
>>>>>>> 7fef02ed0ecc6ac7444f44a066b7566676da826a
export async function getCats() {
  const url = `${URL}/cats`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
