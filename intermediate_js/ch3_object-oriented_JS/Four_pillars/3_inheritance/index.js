class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }

  buy(item){
    console.log(`${this.email} buys ${item.name}.`);
  }
}

class PremiumUser {
  constructor(email, birthDate, level){
    this.email = email;
    this.birthDate = birthDate;
    this.level = level;
  }

  buy(item){
    console.log(`${this.email} buys ${item.name}.`)
  }

  streamMusicForFree(){
    console.log(`Free music streaming for ${this.email}.`)
  }
}