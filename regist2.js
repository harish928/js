var data =[
  {username:"ram",password:"ram123"},
  {username:"sham",password:"sham123"},
  {username:"sai", password:"sai123"},
];
var newsfeed =[
  {username:"ram", timeline:"hi ram you are wlecome"},
  {username:"sham", timeline:"hi sham "},
  {username:"sai", timeline:"hey sai you are new msg"}
];
function userValid(username,password){
  for ( var i=0; i <database.length; i++){
    if(database[i].username === username &&
    database[i].password ===password){
      return true;
    }
  }
  return false;
}
function signIn(username,password){
    if (userValid(username,password)){
      console.log(newsfeed);
}else{
  alert("sorry,worng username and password");
}
var usernameprompt = prompt("Enter your username");
var passwordprompt = prompt("Enter your Password");
  signIn(usernameprompt,passwordprompt);
