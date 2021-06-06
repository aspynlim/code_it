class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }

  buy(item){
    console.log(`${this.email} buys ${item.name}.`);
  }
}

class PremiumUser extends User {
  constructor(email, birthDate, level){
    super(email, birthDate);
    this.level = level;
  }

  buy(item){
    console.log(`${this.email} buys ${item.name} with a 5% discount.`);
  }

  streamMusicForFree(){
    console.log(`Free music streaming for ${this.email}.`)
  }
}

const item = {
  name: 'sweater',
  price: 30000
}

const user1 = new User('jen@gmail.com', '1999-02-09');
const pUser1 = new PremiumUser('test@gmail.com', '2000-10-02', 3);

const users = [user1, pUser1];

users.forEach((user) => {
  user.buy(item);
  console.log(user instanceof PremiumUser);
  console.log(user instanceof User);
});

// jen@gmail.com buys sweater.
// false
// true

// test@gmail.com buys sweater with a 5% discount.
// true
// true