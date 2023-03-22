function BankAccount(balance) {
  let _balance = balance;

  this.getmyBalance = function() {
    return _balance;
  };

  this.deposit = function(theamount) {
    _balance =_balance+ theamount;
  };

  this.withdraw = function(theamount) {
    if (_balance =_balance> theamount) {
      _balance = _balance -theamount;
    } else {
      console.log("You Have Insufficient Funds To Complete The Request!!");
    }
  };
}

let account = new BankAccount(0);

console.log(account.getmyBalance());


account.deposit(900);

console.log(account.getmyBalance()); 
account.withdraw(1000); 





  