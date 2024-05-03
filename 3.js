// 3. Write a “person” class to hold all the details.

class Person {
  constructor(
    name,
    age,
    gender,
    email,
    address = "default address",
    phoneNumber
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
  selfIntro() {
    console.log(
      `My name is ${this.name} and I'm ${this.age} years old and my address is ${this.address}`
    );
  }
}

var person = new Person("Bala", "32", "Male", "balakrishnan4591@gmail.com"); //if we pass a 5th argument then the same will be considered as address, if not then it will take the default value
person.selfIntro();
