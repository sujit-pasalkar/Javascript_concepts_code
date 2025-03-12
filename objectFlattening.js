// Q.1
// function flatten(obj){
//     let flatten_obj = {};

//     Object.keys(obj).forEach(key => {
//         obj()
//     })
// }


// let obj = {
//     name:'sujit',
//     family_name:[{
//         mom_name:'rohini',
//         dad_nm:'chandrakant',
//         wife:'shreya',
//         address:[{
//             pune_Add:'vh',
//             village_add:'mose bk'
//         }]
//     }]
// }

// Q2. flat nested Array without flat() 
let arrInput = [1, 2, 3, [4, 5, [6, 7, 8], 9], [10]]

let res = [];

function flatIt(arr) {
    if (arr) {
        for (let el of arr) {
            if (Array.isArray(el)) {
                flatIt(el)
            } else {
                res.push(el)
            }
        }
    }
}

flatIt(arrInput)

console.log(res)

















// interview altimetric l1
// function outer(){

//     var test1 = 10;

//     function inner(){
//         let test2 = 20;
//         console.log(test1)
//         return test2 +test1;
//     }

//     return inner();

// }


// var callOuter = outer;
// console.log(callOuter());



// iife

// let res = (function(){
//     let a =10;
//     var b = 20
//     return a+b
// })();

// console.log(res);


// let a ={}

// Object.create()
// Object.assign(obj,ob2)

// test=func.bind(this, [arg])

// test();

// // freq of each char from a str
// // abcdeee

// str = 'abcdeee';

// let res = str.split('').reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr] =  acc[curr] +1
//     } else{
//         acc[curr] = 1
//     }
//     return acc;
// },{})
// console.log(res);


// // 2nd larg el from arr -- done
// let arr = [4,6,1,2,3,10,4,5];
// let first = 0, second = 0;
// for (let a of arr) {
//     if(a > first) {
//         second = first //0,4
//         first = a //4,6
//     } else if(a > second){
//         second = a;//5
//     }
// }
// console.log(second);


// prime Number
// function isPrime(num){
//     let flag  = false;
//     // if(num == 0 )()
//     // if(num % num == 0){
//     //     flag = true;
//     // }
//     for (let i = 2; i <= num/2; i++) {
//         if(num % i == 0) {
//             flag = true;
//             break;
//         }
//     }
//     return flag ?'not prime': 'prime'
// }
// console.log(isPrime(9))

// fibb
// 0,1,1,2,3
// function fib(n){
//     let [f,s] = [0,1];
//     let str = '0,1'
//     for (let i = 2; i < n; i++) {
//         let num= f+s;
//         console.log(num);
//         str = str+','+num
//         f = s;
//         s = num;
//     }
//     return str
// }
// console.log(fib(6))


// Q.reverse array without inbuilt function
// let array = [4,3,2,1,0];
// for (let i = 0; i < array.length; i++) {
// just reverse with --i
// }





