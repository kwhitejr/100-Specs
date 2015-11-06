var Person = function(name, money, age, gender){
    this.name = name;
    this.money = money;
    this.age = age;
    this.gender = gender;
};

Person.prototype.spendMoney = function(x) {
    return this.money -= x;
};

Person.prototype.earnMoney = function(x) {
    return this.money += x;
};

var BankAccount = function(balance, owner) {
  this.balance = balance;
  this.owner = owner; // should this be a Person constructor?
};

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
  this.owner.money += amount;
};

var kevin = new Person("Kevin", 100, 32, "male");
var kevinAccount = new BankAccount(50, kevin);
kevinAccount.withdraw(30);
console.log(kevin.money);
console.log(kevinAccount.balance);