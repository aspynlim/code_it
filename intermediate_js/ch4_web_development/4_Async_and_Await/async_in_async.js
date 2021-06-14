const applyPrivacyRule = async function(users){
  const resultWithRuleApplied = users.map((user) => {
    const keys = Object.keys(user);
    const userWithoutPrivateInfo = {};
    keys.forEach((key) => {
      if(key != 'address' && key !== 'phone'){
        userWithoutPrivateInfo[key] = user[key];
      }
    });
    return userWithoutPrivateInfo;
  });

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(resultWithRuleApplied); }, 2000);
  });
  return p;
};

async function getUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    const users = JSON.parse(result);
    const resultWithRuleApplied = await applyPrivacyRule(users);
    return resultWithRuleApplied;
  } catch(error){
    console.log(error);
  } finally {
    console.log('exit');
  }
}

getUsers().then((result) => { console.log(result);});