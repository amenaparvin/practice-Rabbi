// let number = 5;
// if (number > 0){
//     console.log("positive");
// }else if (number < 0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }

// function check(input){
//     if(input >0){
//         console.log(`${input} is a positive number`);
//     }
// }
// check(8);

function addDouble(a,b){
    console.log(`${a+b} is the summation`)


}


//Positive Negative

// Problem Statement
// Write a program that checks if a number entered by the user is positive, negative, or zero.

// function main (input) {
//     /**
//      * Write JavaScript code from here
//      */
    
//     if (input > 0){
//         console.log(`${input} is a positive number.`);
//     }else if (input < 0){
//         console.log(`${input} is a negative number.`);
//     }else{
//         console.log("The number is zero.");
//     }
    
// }


// function main (input) {
//     /**
//      * Write JavaScript code from here
//      */
//     const values1 = input.split(' ');
//     console.log(values1);
//     const values2 = values1.map(Number);
//     console.log(values2);
//     let num1 = values2[0];
//     let num2 = values2[1];
//     console.log(num1,num2);

//     console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
// }

// main("30 40");

// function main (input) {
//     /**
//      * Write JavaScript code from here
//      */
//     const coordinates = input.split(' ').map(Number);
//     let x1 = coordinates[0];
//     let y1 = coordinates[1];
//     let x2 = coordinates[2];
//     let y2 = coordinates[3];
    
//     let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
//     console.log("Distance:", distance.toFixed(2));
    
// }
// main("0 0 2 2");

// function main (input) {
//     /**
//      * Write JavaScript code from here
//      */
//     const lines = input.split("\n");

//     const point1 = lines[0].split(" ");
//     const point2 = lines[1].split(" ");

//     const x1 = Number(point1[0]);
//     const y1 = Number(point1[1]);
//     const x2 = Number(point2[0]);
//     const y2 = Number(point2[1]);

//     const deltax = x2 - x1;
//     const deltay = y2 - y1;

    
    
//     const distance = Math.sqrt( deltax*deltax + deltay*deltay);
    
//     console.log(`Distance: ${distance.toFixed(2)}`);
// }s

// function sumAllNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// const result1 = sumAllNumbers(1, 2, 3, 4);
// console.log(result1);  

// const result2 = sumAllNumbers(5, 10, 15);
// console.log(result2);  

// const result3 = sumAllNumbers();
// console.log(result3);
// const result = sumAllNumbers(1, 2, 3, 4);
// console.log(result); 

// const resultWithSingleValue = sumAllNumbers(5);
// console.log(resultWithSingleValue);

// const resultWithNoValues = sumAllNumbers();
// console.log(resultWithNoValues);

// function findMax(numbers){
//     return Math.max(...numbers);
// }
// const result = findMax([1, 2, 3, 4, 5]);
// console.log(result);

// const resultWithNegativeNumbers = findMax([-1, -2, -3, -4, -5]);
// console.log(resultWithNegativeNumbers);

// function createCounter(){
//     let count = 0;
//     return {
//         increment: function(){
//             count++;
//             },
//         getValue: function(){
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();

// console.log(counter.getValue());

// function sumTwoNumbers(num1, num2){
//     const add = function(a, b){
//         return a + b;
//     };
    
//     return add(num1, num2);
    
// }
// const result = sumTwoNumbers(3, 5);
// console.log(result);

// async function fetchData(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
//     const response = await fetch(url);
//     const data = await response.json();
//         console.log(data);
    
// } 
// fetchData();



