// var accounts = [
//   {accountId:"100",name:"john",balance:5000,age:26},
//   {accountId:"101",name:"ram",balance:5100,age:20},
//   {accountId:"102",name:"sham",balance:50000,age:56},
// ];
// function findAccount(accountId){
// var noAcc =false; //flage
// for(account of accounts){
//   if (account.accounId ==accountId){
//     return account;
//   }
// }
// if(!noAcc){
//   alert("Account Not found")
//   return null;
// }
// }
// function showBalance(){
//   var accountId = prompt("Enter Your account Id");
//   var data = findAccount(accountId);
//   if(data){
//     alert(`Welcome to My Bank ::
//       Hi ${data.name} with account Id : ${data.accountId}
//       And your balance :: ${data.balance}`);
//   }
// }
// function deposit(dAmount){
//   if(dAmount > 0){
//     var accoundId = prompt("Enter Your account Id");
//     var data = findAccount(accountId);
//     if(data){
//       alert(`your old balance is :: ${data.balance}`)
//       data.balance +=dAmount;
//       alert(`your New balance is :: ${data.balance}`)
//     }
// }else{
//   alert("Invalid Amount For Deposit")
// }
// }
// showBalance();
// deposit(20000)
