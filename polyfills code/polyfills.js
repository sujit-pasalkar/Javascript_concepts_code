// write code for some inbult methods of js



// palindrome - with inbuilt functions
function testPal(test) {
    // let a = '121';
    return test == test.toString().split('').reverse().join('')

}
// console.log(testPal(121));


// palindrome number  - without inbuilt functions



// reverse string without inbuilt function - create your version of reverse

let str = String('abcde');

let reverse = function (str) {
    let arr = []
    for (let i = str.length; i >= 0; i--) {
        arr.push(str.charAt(i))
    }
    return arr.length? arr.join('') :''
}

str.__proto__.reverse = reverse;

console.log(str.reverse(str));










let a ={'name':'sujit'};
// let b = {};


// b = a;

// a.name = 'agnel';

// b = JSON.parse(JSON.stringify(a))

let{name} = a;
console.log(name)












