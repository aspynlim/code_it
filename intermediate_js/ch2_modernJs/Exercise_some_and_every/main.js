const spait = [
  { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
  { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
  { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
  { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
  check = team.members.every((el) => el === '스파이');
  
  if(check) {
    message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
  } else {
    message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
  }

	console.log(message);
};

/* Destructuring 사용 + Tenary Operator(조건 연산자) */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// function checkSpy(team) {
//   const { codeName, members } = team;
//   const result = members.every((member) => member === '스파이');
//   const message = result
//     ? `팀 ${codeName} 에는 이중 스파이가 없습니다.`
//     : `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`;

//   console.log(message);
// }

// 테스트 코드
spait.forEach((team) => checkSpy(team));