class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }
  buy(item){
    console.log(`${this.email} buys a ${item.name}.`);
  };

  // property 의 값을 읽는 용도로 사용되기 때문에, parameter를 따로 써줄 필요 없음
  get email() {
    return this._email;
  }

  set email(address){
    if(address.includes('@')){
      // 숨기고자 하는 property 이름 : "_" 사용해서 표시
      this._email = address;
    } else {
      throw new Error('Invalid email address');
    }
  }
};

const user1 = new User('smith@google.com', '1992-03-21');

console.log(user1._email); // smith@google.com

user1.email = 'robert@gmail.com';
console.log(user1._email); // robert@gmail.com
console.log(user1.email);  // robert@gmail.com

user1.email = 'Chris Robert';
console.log(user1.email); // Uncaught Error