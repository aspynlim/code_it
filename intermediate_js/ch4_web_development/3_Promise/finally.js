let isLoading = true;

/* ..다른 코드들 */

const url = 'https://jsonplaceholder.typicode.com/users';
// const url = 'https://www.google.com';

fetch(url)
  .then((response) => {
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      return response.json();
    }
    throw new Error('response is not json data');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    isLoading = false;
    console.log(isLoading);
  });

/* ..다른 코드들 */