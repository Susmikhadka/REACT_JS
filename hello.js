// let email = "dipeshmahatto@gmail.com"
// let password ="12345678"

// if(email === "dipeshmahatto@gmail.com" && password ==="12345678"){
//     console.log("Login Successfully !");
// }else {
//     console.log("Invalid credentials !")
// }

// SEE Grade check
// let grade = 85;
// if (grade >= 90) {
//   console.log("Grade: A+");7
// } else if (grade >= 80) {
//   console.log("Grade: A");
// } else if (grade >= 70) {
//   console.log("Grade: B+");
// } else if (grade >= 60) {
//   console.log("Grade: B");
// } else if (grade >= 50) {
//   console.log("Grade: C+");
// } else if (grade >= 40) {
//   console.log("Grade: C");
// }else {
//  console.log("Failed");
// }

// if-else !!!

// let weather = "rainy";
// if (weather === "sunny") {
//   console.log("sunny");
// } else if (weather === "winter") {
//   console.log("winter");
// } else if (weather === "rainy") {
//   console.log("rainy");
// } else if (weather === "cloudy") {
//   console.log("cloudy");
// } else {
//   console.log("Invalid weather");
// }

// switch statement  !!!

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Sun");
//     break;
//   case 2:
//     console.log("Mon");
//     break;
//   case 3:
//     console.log("Thu");
//     break;
//   case 4:
//     console.log("Wen");
//     break;
//   case 5:
//     console.log("Thur");
//     break;
//   case 6:
//     console.log("Fri");
//     break;
//   case 7:
//     console.log("Staurday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let date = new Date().getDay();
// // console.log(date);

// switch (date) {
//   case 0:
//     console.log("Sun");
//     break;
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Thu");
//     break;
//   case 3:
//     console.log("Wen");
//     break;
//   case 4:
//     console.log("Thur");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Staurday");
//     break;
//   default:
//     console.log("Invalid");
// }

// Status !!!
// let status = 200;
// switch (status) {
//   case 201:
//     console.log("Created");
//     break;

//   case 400:
//     console.log("Bad request");
//     break;

//   case 401:
//     console.log("UnAuthorized");
//     break;

//   case 403:
//     console.log("ForBidden");
//     break;

//   case 500:
//     console.log("..");
//     break;

//   case 200:
//     console.log("Ok");
//     break;

//   default:
//     console.log("Invalid");
// }

// for loop !!!

// for(let i = 0 ; i <=10;i++){
//     console.log("I Love JavaScript " + i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log("2 * " + i + " = " + i * 2);
//   console.log();
// }
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(The even Number are:${i});
//   }
// }
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(The odd Number are:${i});
//   }
// }

// const arr =[3,4,5,6,7];
// let sum =0;
// for(let i = 0 ;i<arr.length;i++){
//     sum +=arr[i];
// }

// console.log(The Sum of Array is :${sum});
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);

// let ans =[3,4,5,6,7,8,"apple","carrot"] // data structure
// console.log(ans);
// console.log(ans[3]);

// const arr = [3, 6, 8, 9, 2, 3, 1];

//splice
// arr.splice(1,2);
// console.log(arr);

// let rsult=arr.slice(1,3);
// console.log(rsult);

//indeXof
// let res = arr.lastIndexOf(3);
// console.log(res);
// let arr = [];
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// for (let i = 1; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(the sum of arr is :${sum});

//length
// console.log(arr.length);
//push
// arr.push(4)
// console.log(arr);

//pop
// arr.pop();
// console.log(arr)

//shift
// arr.shift()
// console.log(arr)

//unishift
// arr.unshift(14)
// console.log(arr)

//icludes
// let res = arr.includes(4)
// console.log(res);

// const output=["a","b","c"];
// console.log(output.join("")); // - , space

//object
// const person = {
//   name: "Dipesh Mahato",
//   age: "21",
//   occupation: "student",
//   eduction: "bca",
//   ismarried: false,
//   address: {
//     street: "bafal",
//     city: "kathmandu",
//     country: "nepal",
//     province:{
//         name:"Bagmati"
//     }
//   },

//   greet: function () {
//     console.log(
//       Hello my name is: ${this.name}. And i am ${this.age} years old.
//     );
//   },
// };

// console.log(person);
// console.log(person.address.street);
// person.greet();

// function

// function myfunction(){
//     console.log("Hey You");
// }
// myfunction();

// Parameteries funtion
// function Sum(a,b){
//     console.log("The sum of the number :" + (a+b));
// }
// Sum(5,8);

// function areaCircle(r) {
//   console.log(The area of circle of radius ${r} is : ${r * r * Math.PI});
// }

// areaCircle(5);

// function CalculateTotal(cartItems,taxRate){
//     let total = 0;
//     for (let i = 0;i<cartItems.lenth;i++){
//         total+= cartItems[i].price*cartItems[i].quantity;
//     }
//     total += total*taxRate;
//     return total;
// }

// let cart = [
//     {name:"Dr Martin",Price:8000,quantity:1},
//     {name :"Sb Dunk",Price:4000,quantity:2}
// ]

// const result = CalculateTotal(cart,0.02);
// console.log(you full and final payment is :${result});

// function myFun(){
//     let a = prompt("Enter first Number ?");
//     let b = prompt("Enter Second Number ?");
// }

// myfunction()

 //scoping 

// function myFunc() {
//   if (true) {
//     var x = 90;
//     let y = 70;
//     const z = 30;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x);
// }
// myFunc();

// Dom
// console.log(document.body);
// let result= document.getElementById("hello");
// // console.log(result);
// result.innerText = "I have many Proof";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.textAlign = "center";

// let output= document.getElementsByClassName("myClass")[0];
// // console.log(output);
// output.innerText = "Dipesh";
// output.style.backgroundColor = "blue";
// output.style.color = "white";
// output.style.textAlign = "center";

// let ans= document.getElementsByClassName("myClass");

// ans[1].innerText = "Fine";
// ans[1].style.backgroundColor = "yellow";
// ans[1].style.color = "black";
// ans[1].style.textAlign = "center";

// let show= document.getElementsByTagName("span");

// show[1].innerText = "spanning";
// show[1].style.backgroundColor = "green";
// show[1].style.color = "black";
// show[1].style.textAlign = "center";

// let btn = document.querySelectorAll("button");
// btn[0].innerText="HeyBtn";

// let output = document.querySelectorAll("button");
// output[0].innerText="HeyBtn";


//advance array
let arr=[2,3,4,5,1]
//find
// let output =arr.find((value,index=>3));
// console.log(output);

// const products=[
//     {id:1,name:"dr shree",price:8000,instoc:true},
//      {id:2,name:"air focus",price:9000,instock:true},
//     {id:3,name:"s dunl",price:6000,instoc:true},
//     {id:4,name:"travis cott",price:7000,instock:true},
// ];

//  let ans=products.find((value,index)=>!value.instoc);
//  console.log(ans);
 
//  //some
//  let output =arr.find((value,index=>3));
// console.log(output);

// const products=[
//     {id:1,name:"dr shree",price:8000,instoc:true},
//      {id:2,name:"air focus",price:9000,instock:false},
//     {id:3,name:"s dunl",price:6000,instoc:true},
//     {id:4,name:"travis cott",price:7000,instock:true},
// ];

//  let ans=products.every((value,index)=>value.instoc);
//  console.log(ans);

//forEach
// let output =arr.forEach((value,index=>value*3));
// console.log(output);

// const products=[
//     {id:1,name:"dr shree",price:8000,instoc:true},
//      {id:2,name:"air focus",price:9000,instock:true},
//     {id:3,name:"s dunl",price:6000,instoc:true},
//     {id:4,name:"travis cott",price:7000,instock:true},
// ];

//  let ans=products.forEach((value,index)=>!value.instoc);
//  console.log(ans);

//map
// let output =arr.map((value,index=>value*3));
// console.log(output);

// const products=[
//     {id:1,name:"dr shree",price:8000,instoc:true},
//      {id:2,name:"air focus",price:9000,instock:true},
//     {id:3,name:"s dunl",price:6000,instoc:true},
//     {id:4,name:"travis cott",price:7000,instock:true},
// ];

//  let ans=products.map((value,index)=>!value.instoc);
//  let display=document.createElement("h2");
//  display.innertext=ans;
//  document.doctype.prepend(display);

 //reduce
//  let NewArr=[1,2,4,5,6]
//  let output =arr.reduce((accum,curValue=>accum+curValue));
// console.log(output);

// const products=[
//     {id:1,name:"dr shree",price:8000,instoc:true},
//      {id:2,name:"air focus",price:9000,instock:true},
//     {id:3,name:"s dunl",price:6000,instoc:true},
//     {id:4,name:"travis cott",price:7000,instock:true},
// ];

//  let ans=products.reduce((total,curValue=>total+curValue.price));
//  console.log(ans);

 //let heading=document.getElementById("heading");
// //let ox=document.getElementById("ox1");
 //let tnClic =document.getElementById("tnClic")

 //tnClic.addEventListener("click",)


//setInterval(()=>{
  //  console.log("i love java");
//},100);

// console intervalId = setInterval(()=>{
   // console.log("I love java");
 //},100);
// function updateClock(){
  //  const clock =document.querySelector(".clock")
    //const now = new Date()
    //const hours = now.getHours().toString().padStart(2,"0");
    //const minutes = now.getMinuts().toString().padStart(2,"0");
    //const seconds = now.getSecponds().toString().padStart(2,"0");
    
    //clock.innerHTML = `${hours}:${minutes}:${seconds}`;
 //}
 //setInterval(updateClock, 1000);

 //OOP
 //function Person(name,age,address){
  //this.name=name;
  //this.age=age;
  //this.address=address;

  //this.greeting=function(){
    //let greet=`Hello my name is ${this.name},i am ${this.age},years is ${this.address} `
    //return greet;

  //};

 //}
 //Person1= new Person("Ram Thapa",23,"Dilliazar");
 //Person2= new Person("sita",20,"Maitidevi");

 //console.log(Person1,person2);
 //console.log(person1.greeting());


 function ankAccount(customerName ,balance=0){
  this.customerName=customerName;
  this.balance=balance
  this.accountNumber=Date.now();

 
 this.deposit = function(amount){
  this.balance +=amount
 };

 this,withdraw=function(amount){
  this,balance= amount;
 };
 }
//  const ramAccount = new ankAccount("dipesh",1000);
//  ramAccount.deposit(50000);

//  console.log(ramAccount,);

const addforms=document.querySelector("#addform");
const customerName=document.querySelector("#customername");
const balance=document.querySelector("#balance");

let accounts=[];
addforms.addEventListener("")

