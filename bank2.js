var accounts = [
  {accountId:"100",name:"vamshi",balance:5000,age:26},
  {accountId:"101",name:"ram",balance:5100,age:20},
  {accountId:"102",name:"sham",balance:10000,age:36},
];
function findAccount(accountId){
var noAcc =false; //flage
for(account of accounts){
  if (account.accountId ==accountId){
    return account;
  }
}
if(!noAcc){
  alert("Account Not found")
  return null;
}
}
function showBalance(){
  var accountId = prompt("Enter Your account Id");
  var data = findAccount(accountId);
  if(data){
    alert(`Welcome to My Bank ::
      Hi ${data.name} with account Id : ${data.accountId}
      And your balance :: ${data.balance}`);
  }
}
function deposit(dAmount){
  if(dAmount > 0){
    var accountId = prompt("Enter Your account Id");
    var data = findAccount(accountId);
    if(data){
      alert(`your old balance is :: ${data.balance}`)
      data.balance +=dAmount;
      alert(`your New balance is :: ${data.balance}`)
    }
  }
  else{
    alert("Invalid Amount For Deposit")
  }
  }
function withdraw(wdAmount){
  if(wdAmount > 0){
    var accountId = prompt("Enter your account Id");
    var data = findAccount(accountId);
    var wdAmount = prompt("Enter your withdraw amount");
    if(data){
      alert(`your withdraw amount is :: ${data.balance}`)
      data.balance -=wdAmount;
      alert(`your New balance is :: ${data.balance}`)
    }
  }
 else {
  alert("Invalid Amout For withdraw")
}
}
showBalance();
deposit(2000)
withdraw(1000)
