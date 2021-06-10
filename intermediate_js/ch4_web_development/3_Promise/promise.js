fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: // 여기에 코드를 작성하세요.
  }))
  .then(() => fetch('https://learn.codeit.kr/api/members'))
  .then((response) => { 
    if (response.status === 200) {
      // 여기에 코드를 작성하세요.
    } else {
      throw new Error('New members not added');
    }
  })
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });