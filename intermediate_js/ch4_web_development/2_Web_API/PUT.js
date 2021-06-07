const member = {
  name: 'Jason',
  email: 'jason@gmail.com',
  department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/1', {
  method: 'PUT',
  body: JSON.stringify(member),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });