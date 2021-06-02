function BankAccount(name, money) {
  const holder = name;
  let _balance = money;

  const account = {
    get balance() {
      return _balance;
    },
  
    set balance(money){
      if(money >= 0){
        _balance = money;
      } else {
        console.log('You cannnot set negative number for balance');
      }
    }
  };
  return account;
}

const account1 = new BankAccount('Michael', 10000);
account1.balance = 20000;
console.log(account1.balance);  // 20000
console.log(account1._balance); // undefined
account1.balance = -5000;       // You cannnot set negative number for balance