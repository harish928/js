alert("welcome to timezone");
var timezone = prompt("Enter the time between 1-24");
  if(timezone<=5)
  {
    alert("Good Night")
    console.log(timezone,"Good Night");
  }
  else if(timezone<12){
    console.log(timezone,"Good Morning");
  }
  else if(timezone=12){
    console.log(timezone," Noon");
  }
  else if(timezone<=18){
    console.log(timezone," Good Afternoon");
  }
  else if(timezone<=24){
    console.log(timezone,"Good Evening");
  }
  else{
    console.log(timezone,"Invalid number");
  }
