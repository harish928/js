alert("Welcome!");
let liftNumber=+prompt('Enter floor number');
if(liftNumber<0){
  alert("lift moving up")
}
else if{liftnumber>0){
  alert("lift moving down")
}
alert(`Doors opening
  Welcome to floor:` +liftnumber)
  for (i=0; i<=7;i++){
    let floor = +prompt("Enter floor number")
    if(floor > liftnumber){
      alert("lift moving up")
      alert(`Doors opening
        Welcome to floor:`+floor)
    }
    else if(floor<liftnumber){
      alert("lift moving down")
      alert(`Doors opening
        welcome to floor:`+floor)
    }else{
      alert("same floor")
    }
    liftnumber=floor
  }
