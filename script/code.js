// const subject= ["Python","C++", "VB.Net", "Javascript", "Assembly"] 
// console.log(subject);

// let lastArray= subject.pop(); //to remove the last element in an array //it will only remove and display the last element 
// console.log(lastArray);

//display the last element (joel)
const subject= ["Python","C++", "VB.Net", "Javascript", "Assembly"] 
console.log(subject.at(-1)); //helps us mae use of a neg numb//-1 gives us the last elemnt 

//display the middle element
// 5/2=2.5
let x = Math.floor(subject.length/2);
console.log(subject [x]);



//  method2 
// let x =Math.floor(subject.length/2);
// if(x % 2 ==0){
//     console.log(subject[x])
// }else{
//     console.log(subject.slice(x-1, x + 1));
// }