async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.commm/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();