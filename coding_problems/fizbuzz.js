// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" 
// at multiples of 3 and 5


(function dontRun(){for(let i = 0; i <100;i++){
    // "fizz" at multiples of 3
    if(i%3 === 0){console.log("fizz",i);
    }

    // "buzz" at multiples of 5
    if(i%5 === 0){console.log("buzz",i);
    }

    // "fizzbuzz" at multiples of 3 and 5
    if(i%3 === 0 && i%5 === 0){console.log("fizzbuzz",i);
    }
}})


let a = [1,2,3,4,5]