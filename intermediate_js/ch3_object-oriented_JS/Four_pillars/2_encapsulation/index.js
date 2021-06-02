class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }
  buy(item){
    console.log(`${this.email} buys a ${item.name}.`);
  };
};

const user1 = new User('chris123@google.com', '1992-03-21');

console.log(user1.email); // chris123@google.com

user1.email = 'Chris Robert';

console.log(user1);
console.log(user1.email); // Chris Robert