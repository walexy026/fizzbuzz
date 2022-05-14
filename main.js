// const data = [ 'Bunmi', 'Wale' ,'Babatunde' ,'Efe' ,'Bossteeh' ,'Simeon']
// for (let a = 0; a < data.length; a++) {
//     const element = data[a];
//     // console.log(element )

//     if (data[a] =="Bunmi") {
//         console.log(data[a] + " " + 'SHE IS A GIRL')
   
//     }        
// else{
//     console.log( data[a] + " " +"THEY ARE BOYS")       
// }
// }

// let age = prompt("Enter your age")
// if (age >= 18) {
//     console.log("you are old enough to drive")
// }
// else {
//     console.log ("you cant drive")
// }
// let age = 18
// switch (age) {
//     case "17":
//         console.log('you cant drive')
//         break
//         case "20":
//             console.log("you can drive")
//             break
//             default:
//                 console.log("you are fit")
// }
// let isRaining = true
// isRaining 
// ? console.log("you need a rain coat")
// : console.log( "no need for rain coat")
// let myAge = prompt("Enter your age")
// if (myAge == "18"){
//     console.log("we are the same age")
// }
// else if( myAge <= "17"){
//     console.log("we are not the same age")

// }
// else( myAge >= "19")
//     console.log("you na senior man")

// let even = prompt("enter number")
// let nums = parseInt(even)
// // console.log(nums)
// if (nums * 2){
//     console.log(" is an even number")
// }
// else console.log( " it is an odd number")

// let grade =prompt("whats my grade")
//  switch (grade){
//      case "80 >=100":
//          console.log('A')
 //  }

//  let firstName ='olawale'
//    let name = firstName[firstName.length-1]
//    console.log(name)
// function addSeven (num){
//     return num - 5;
// }
// console.log(addSeven(20))
// function greaterThanorequalto(val){
//     if (val <= 10){
//         return "bad grade"
//     }
//     if (val <= 20){
//         return "good grade"
//     }
//     return "excellent grade"
// }
// console.log(greaterThanorequalto())

const arr = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
arr.push('kenya')
console.log(arr)
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// con.pop
// console.log(con)
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// con.shift()
// console.log(con)
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// con.reverse()
// console.log(con)
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// con.splice(1, 2)
// console.log(con)
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// // con.sort()
// console.log(Array.isArray(con))
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// // con.sort()
// console.log(con.toString())
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// // con.sort()
// console.log(con.join(' , .'))
// let con = ['nigeria' ,'ghana', 'togo' ,'mali', 'benin' , 'liberia']
// let europe = ['england' ,'spain', 'italy' ,'france', 'germany' , 'portugal']
//  let world = con.concat(europe)
// console.log(world)
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages)
// let median =( ages[4] + ages[5] ) /2
// console.log(median)
// let first = ages[9] - ages[0]
// console.log(first)

// for (let i = 0; i <= 5; i++ ) {
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++ ) {
//     console.log(i)
// }
// for (let i = 0; i <=10; i ++){
//     // console.log('${i} * ${i} = ${i * i}' )
//     console.log(i)
// }

// const numbers = [1,2,3,4,5]
// let sum = 5
// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//     console.log(sum)
// }

// const letter = "Udacity"
//  for (let i = 0; i < letter.length; i++){
// console.log(letter.charCodeAt(i));}

// const answer = "ALL Strings are CrEaTeD equal" == "ALL STRINGS are CrEaTED Equal"
// console.log(answer)

// const studentName ="Wale";
// const haveEnrolledInCourse = true;
// const haveCompletedTheCourse = false;

// if (haveEnrolledInCourse){
//     console.log(" Welcome, " + studentName +" to Udacity!" )
// }
/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

// your code goes here
let size = "N/A"
if ((shirtWidth >=18 && shirtWidth <=26) && (shirtLength >=28 && shirtLength <=33) && (shirtSleeve >= 8.13 && shirtSleeve<=9.63)){
  size = "S"
}
else if ((shirtWidth >=27.99 && shirtWidth <=28) && (shirtLength >=33 && shirtLength <=33.99) && (shirtSleeve >= 10.2 && shirtSleeve<=11.35)){
size = "L"
}
else if ((shirtWidth >=29.99 && shirtWidth <=30) && (shirtLength >=35 && shirtLength <=36.99) && (shirtSleeve >= 16.2 && shirtSleeve<=19.35)){
size = "M"
}
else {
size = "N/A"
}
console.log(size)

if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

if(17)
    console.log("This text will be printed if the condition above evaluates to true");

    const isGoing = true;
const color =red;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);

/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 */
 
// change the value of `education` to test your code
const education = "no high school diploma";

// set the value of this based on a person's education
let salary = 0;

// your code goes here
switch (education){
  case "high school diploma" :
  salary = 35256;
  break;
  case "high school diploma":
        salary = 35256;
        break;
    case "Associate's degree":
        salary = 41496;
        break;
    case "Bachelor's degree":
        salary = 59124;
        break;
    case "Master's degree":
        salary = 69732;
        break;
    case "Professional degree":
        salary = 89960;
        break;
    case "Doctoral degree":
        salary = 84396;
        break;
}
console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

