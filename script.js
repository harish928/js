alert("Welcome to fruit shop");
var pstatus= true;
fruits=[];
prices =[{
 name:"apple",
 price:20
},{
  name:"orange",
  price:50
},{
  name:"mango",
  price:10
}]
while (pstatus){
  var start = prompt("continue Purchase with yes otherwise no");
  if (start=='yes'){
    var fruitName = prompt('Enter Fruit Name ::');
    var fruitCount = prompt('Enter Number of Fruits ::');
    var fruit ={};
    let  total;
    fruit.fruitName = fruitName;
    fruit.fruitCount = fruitCount;
    for(let index=0 ;index < prices.length;index++){
      total =(prices[index].name == fruitName)?
      (prices[index].price * fruitCount) :
      (20*fruitCount);
    }
  fruit.price = total;
  fruits.push(fruit);
}else{
  pstatus=false;
}
}
console.log(fruits);
console.log("cart items",fruits.length);
