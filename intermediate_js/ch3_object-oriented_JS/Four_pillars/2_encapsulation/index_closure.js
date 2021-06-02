function createUser(email, birthDate) {
  let _email = email;
  const user = {
    birthDate,

    get email(){
      return _email;
    },

    set email(address){
      if(address.includes('@')){
        _email = address;
      } else {
        throw new Error('Invalid email address');
      }
    }
  };
  return user;
}

const user1 = createUser('test@gmail.com', '2000-10-20');
console.log(user1.email);  // test@gmail.com
console.log(user1._email); // undefined