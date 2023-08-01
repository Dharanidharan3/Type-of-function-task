//Task 1 => Print odd numbers in an array
// => Function
// let ar=[5,10,15,20,25,30,35,40,45];
// let result=[];
// function odd(ar){
//     for(let i=0;i<ar.length;i++){
//         if(ar[i]%2!=0){
//             result.push(ar[i]);
//         }
//     }
//     return result;
// }
// console.log(odd(ar));

// => Sum of all numbers in an array 
let ar=[5,10,15,20,25,30,40,45];
let result=0;
function add(ar) {
   for(let i=0;i<ar.length;i++){
      result += ar[i];
   }
   return result;
}
console.log(add(ar));

// => Convert all the strings to title caps in a string array 
// function toTitleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
//   }
//   console.log(toTitleCase("dharanidharan"));


 // =>Anonyomus Function
 //Task 1 => Print odd numbers in an array
//  let arr=[5,10,15,20,25,30,35];
//  let result=[];
//  let odd = function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
//  }
//  console.log(odd(arr));

//=> Sum of all numbers in an array
// let arr=[5,10,15,20,25];
// let sum=0;
// let add =function(arr){
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(add(arr));

// => Convert all the strings to title caps in a string array 
//function toTitleCase(str) {
 //     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
//   }
//   console.log(toTitleCase("dharanidharan"));


//IIFE => Immediately Invoked Function Expression
// => Print the odd numbers in an array
// (function odd(arr) {
//     var result = [];
//     for (let i=0; i<arr.length; i++) {
//       if (arr[i] % 2 != 0) {
//         result.push(arr[i]);
//       }
//     }
//     console.log(result);
//   })([5,10,15,20,25,30,35,40,45]);

//=> Sum of all numbers in an array
// (function add(arr) {
//     var sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// })([5,10,15,20,25,30,35,40,45]);

// => Convert all the strings to title caps in a string array 
//function toTitleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
//   }
//   console.log(toTitleCase("dharanidharan"));


// => Arrow Function 
// => Print the odd numbers in an array
// let odd=(arr) => {
//     let result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i]%2!=0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };
//   console.log(odd([5,10,15,20,25,30,35,40,45]));

//=> Sum of all numbers in an array
// let add=(arr) =>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// };
// console.log(add([5,10,15,20,25,30,35,40,45]));













