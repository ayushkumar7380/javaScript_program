// console.log("I love javascript");
// let a=10;
// let b=20;
// console.log("Sum of first two number 10 & 20");
// console.log(a+b);
// let name = "tony stark";
// console.log(name);
// price = 23;
// console.log(price);
// console.log(b/a);
// console.log("Hello World!");
// x=null;
// y= undefined;
// console.log(x);
// console.log(y);
// c='d';
// console.log(c);
// console.log(name);
// console.log("Ayush Kumar");
// console.log("Rahul Kumar");
// console.log(typeof(c));
// console.log(typeof(name));
// _fullname="Ayush";
// $Full_name="Rahul";

// console.log(_fullname);
// console.log($Full_name);

// FullName= "Sarita";
// console.log(FullName);

// a = 10
// a = 30
// console.log(a);
// let z = 10;
// {
//     let z=20;
//     console.log(z);
// }
// console.log(z);
// console.log(typeof(z));
// const student = {
//     FullName: "rahul kumar ",
//     age: 20,
//     cgpa: 8.4,
//     ispass: true
// }
// console.log(student["FullName"]);
// console.log(student.age);

// const product = {
//     ProductName : "Parker Jotter Standard CT Ball Pen(Black)",
//     Rating: 4, 
//     TotalRating: 7002,
//     IsDealOfDay: true,
//     price: 270,
//     MRP: 285,
//     DiscountPercentage: 5
// }

// console.log(typeof product);
// console.log(product.ProductName);
// console.log(product.price);
// console.log(product.MRP);
// console.log(product.DiscountPercentage);
// console.log(product.Rating);

// const boy={
//     weight: 23,
//     height: 56
// }

// console.log(boy.height);

// console.log(typeof ("asf"+230));

// const InstaProfile = {
//     UserName: "aysh",
//     NoOfFollower: 45,
//     isFollow: true
// }
// console.log("...................................................................................");
// console.log(InstaProfile.UserName);
// console.log(InstaProfile.isFollow);
// console.log(typeof InstaProfile);
// console.log(typeof InstaProfile.NoOfFollower);

// let value = prompt("Please enter some value to check the ranges");
// if((0<=value)&&(value<10)){
//     console.log("value is in between 0 to 9(inclusive)");
// }
// else if((value>=10)&&(value<100)){
//     console.log("value is in between 10 to 99");
// }
// else{
//     console.log("value is greater the or equal to 100");
// }

// for(let a=0;a<3;a++){
//     console.log("Ayush");
// }

// let sum=0;
// for(let i = 0 ;i<=5;i++){
//     sum = sum + i;
// }

// console.log("sum =", sum);


//lets prints some pattern 

// for(let i=0;i<5;i++){
//     for(let j=5;j>0;j--){
//         console.log(i,j);
//     }
// }

// for( let i =0 ;i<=100;i++){
//     if(i%2===0){
//         console.log("even no =", i);
//     }
// }

// creating a game by choosing random no

// let n = 23;
// let val;
// do{
//     val = prompt("enter the number ");
//     if(val == n){
//         console.log("YOU WON !");
//     }
//     else{
//         console.log("try again !!!!");
//     }
// }while(val!= 23);

// let str="ayush";
// for(let i of str){
//     console.log("character is : ", i);
// }

// console.log("character at 4th position : " ,str[3]);
// console.log("character at 3rd position : " ,str[2]);
// console.log("character at 2nd position : " ,str[1]);
// let q=0;
// let str1=`my name is ayush which has ${4+1} characters `;
// console.log(str1);
// let str2 =`my name is ${prompt("Enter your name : ")} which has ${prompt("please enter the number of characters in your name : ")} characters `;
// console.log(str2);

// let str = prompt("Enter your full name : ");
// let str1=str.trim();
// let newstr=`@${str1}${str1.length}`;
// console.log(newstr);

// let i;
// let heros=["ironman","hulk","thor","batman"];
// for(i of heros){
//     console.log("name of heros : ",i);
// }

// let arr1 =[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr1);

// let arr2 =[[1,"rahul",3],[4,5,6],[7,8,9]];
// console.log(arr2);

// let arr3=[];
// for(let r=0;r<3;r++){
//     arr3[r]=[];
//     for(let c=0;c<3;c++)
//         arr3[r][c]=arr1[r][c]+arr2[r][c];
// }

// console.log(arr3);
// console.log(arr3.length);
// console.log(arr2.length);
// console.log(arr1.length);
// const friends = ["divyanshu","arpit","ankit","Gaurav","arya"];
// console.log(friends);

// console.log(typeof friends);
// console.log(friends[5]);

// friends[0]="sachin";

// console.log(friends);

// for(let i of friends){
//     console.log(i);
// }

// let prod = {
//     namme: "ayush",
//     class:"10th"
// };

// for(let j in prod){
//     console.log(j);
// }
// const friends = ["divyanshu","arpit","ankit","Gaurav","arya"];

// for(let index=0;index<friends.length;index++){
//     console.log(friends[index].toUpperCase());
// }

// let sum=0;
// let marks=[22,45,34,72,88,64];
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// for(let val of marks){
//     sum = sum + val;
// }
// console.log("Average of marks: ",marks,"is : ",sum/marks.length);



