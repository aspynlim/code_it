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
  constructor(email, birthDate, level, point){
    super(email, birthDate);
    this.level = level;
    this.point = point;
  }

  buy(item){
    super.buy(item);
    this.point += item.price * 0.05;
    console.log(`${this.point} points`);
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
const pUser1 = new PremiumUser('test@gmail.com', '2000-10-02', 3, 0);

const users = [user1, pUser1];

users.forEach((user) => {
  user.buy(item);
});


// jen@gmail.com buys sweater.
// test@gmail.com buys sweater.
// 1500 points