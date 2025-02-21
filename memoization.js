// mine version -(could need to optimize more)

function computeFactorial(){
    let cache = new Map();
    return (num) =>{
        if(cache.has(num)){
            console.log('returning cacheed version')
            return cache.get(num);
        }
        if(num == 0){
            cache.set(num,1);
            return 1;
        }
        let fact = 1;
        for (let i = num; i >= 1; i--) {
            fact = i*fact;
        }
         cache.set(num,fact);
        console.log('returning calc version')
        return fact;
    }
}

let factorial = computeFactorial();
console.log(factorial(5));


// todo: solve using recursion and memoization