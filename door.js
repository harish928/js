var sensordoor;
sensordoor = prompt("please enter  your Name ")
username = prompt("please enter  Roomnumber 1 and 4")
switch (username)
{
    case "1":
        alert("door is opened 1st time");
        break;
    case "2":
        alert("door is opened 2nd time");
        break;
    case "3":
        alert("door is opened 3rd time");
        break;
        default:
        alert("door is blocked");
        console.log(sensordoor);
  }
