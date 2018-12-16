alert("welcome to Registration page");
var lstatus=true;
var register=[];
// for(var index=0; index<register.length; index++)
while(lstatus){
  var start=prompt("enter 1 for register, 2 for login and 3 for exit");
  if(start==1){
    alert("Register here");
  var username=prompt("enter the username");
  var password=prompt("enter the password");
  alert("registration successful");
console.log("username::",username);
console.log("password::",password);
  }
  if(start==2){
    var username=prompt("enter username");
    var password=prompt("enter password");
    var login={};
    login.username==register[username];
    login.password==register[password];
    register.push(login);
  }
  if(start==3){
    var exit=alert("Exit")
    console.log(exit);
  }
  else{
    lstatus=false;
  }
}
console.log(register);
