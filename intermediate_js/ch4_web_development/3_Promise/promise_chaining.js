function removeUnnecessaryInfo(users) {
  const processedUserList = users.map((user) => {
    const keys = Object.keys(user);
    const processedUser = {};
    keys.forEach((key) => {
      if (key === 'name' || key === 'email') {
        processedUser[key] = user[key];
      }
    });
    return processedUser;
  });
  const p = new Promise((resolve) => {
    setTimeout(() => { resolve(processedUserList); }, 1000); 
  });
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .finally(() => {
    console.log('This job will be done by server soon!');
  })
  .then((result) => removeUnnecessaryInfo(result))
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(result);
  })
  .then((response) => response.json());