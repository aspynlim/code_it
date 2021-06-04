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

  streamMusicForFree(){
    console.log(`Free music streaming for ${this.email}.`)
  }
}

const item = {
  name: 'sweater',
  price: 30000
}

const pUser1 = new PremiumUser('test@gmail.com', '2000-10-02', 3);