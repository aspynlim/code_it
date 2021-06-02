function createUser(email, birthDate) {
  const _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthDate,

    get email(){
      return _email;
    },

    get point(){
      return _point;
    },

    buy(item){
      console.log(`${this.email} buys a ${item.name}.`);
      increasePoint();
    }
  };
  return user;
};

const item = {
  name: 'sweater',
  price: 30000,
};

const user1 = createUser('test@gmail.com', '2000-10-20');
user1.buy(item); // test@gmail.com buys a sweater.
user1.buy(item); // test@gmail.com buys a sweater.
user1.buy(item); // test@gmail.com buys a sweater.
console.log(user1.point);  // 3
console.log(user1._point); // undefined
user1.increasePoint(); // Uncaught TypeError: user1.increasePoint is not a function