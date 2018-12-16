// alert("welcome to seasonal calender");
//   var mts=prompt("Enter the month number");
//   var monthNames=["","January","February","March","April","May","June","July","August","September","October","November","December"];
//   for(index=0;index<12;index++){
//   if(mts==index){
//       console.log(monthNames[index]);
//   }
//   }
//   var entry=(mts<=4)? "Summer Season":
//   (mts<=8)? "Rainy Season":
//   (mts<=12)? "Winter Season":
//   "not allowed";
//   console.log(entry);
//   if(mts<=4){
//     alert("Summer season");
//
//   }
//   else if(mts<=8){
//     alert("Rainy season");
//
//   }
//   else if(mts<=12){
//     alert("rainy season");
//
//   }
//   else{
//     console.log("not allowed");
//   }


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
