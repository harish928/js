alert("Welcome to fruit shop");
var status = true;
fruits=[];
prices=[
{name:"apple",price:10},
{name:"orange",price:20},
{name:"kiwi",price:30}
]
while(status){
  var start = prompt("continue purchase with yes otherwise no");
  if(start=='yes'){
    var fruitName = prompt('Enter fruit name ::');
    var fruitCount = prompt('Enter no of fruits ::');
    var fruit ={};
    let total;
    fruit.fruitName = fruitName;
    fruit.fruitCount = fruitCount;
    (20*fruitCount);
    }
    fruit.price = total;
    fruits.push(fruit);
  }else{
    status =false;
  }
  }
  console.log(fruits);
  console.log("cart items",fruits.length);
}
