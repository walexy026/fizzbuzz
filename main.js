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

for (let i = 0; i <= 5; i++ ) {
    console.log(i)
}

for (let i = 0; i <= 10; i++ ) {
    console.log(i)
}
for (let i = 0; i <=10; i ++){
    // console.log('${i} * ${i} = ${i * i}' )
    console.log(i)
}

const numbers = [1,2,3,4,5]
let sum = 5
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
    console.log(sum)
}