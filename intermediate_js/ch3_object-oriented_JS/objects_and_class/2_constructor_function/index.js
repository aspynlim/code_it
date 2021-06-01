// 1) 함수 이름 대문자로 생성
function User(nickname, birthDate) {
  this.nickname = nickname;
  this.birthDate = birthDate;
  this.buy = function(item){
    console.log(`${this.nickname} buys a ${item.name}.`);
  };
};

const item = {
  name: 'sweater',
  price: 30000
};


// 2) "new" 로 호출해야 함
const user1 = new User('Sam223', '2000-01-10');
const user2 = new User('Kim123', '1999-01-10');

console.log(user1.birthDate);
console.log(user2.birthDate);

user1.buy(item);
user2.buy(item);