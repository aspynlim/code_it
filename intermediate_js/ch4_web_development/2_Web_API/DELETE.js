fetch('https://learn.codeit.kr/api/members/1', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });