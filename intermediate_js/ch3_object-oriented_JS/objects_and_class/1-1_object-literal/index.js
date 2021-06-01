const user = {
  nickname: 'Jen123',
  birthDate: '1992-02-20',
  buy(item){
    console.log(`${this.nickname} buys a ${item.name}.`);
  }
}

const item = {
  name: 'sweater',
  price: 30000
}

console.log(user.nickname);
console.log(user.birthDate);

user.buy(item);