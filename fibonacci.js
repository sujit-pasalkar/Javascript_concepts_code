function calcFibo() {
    let cache = {};

    return function fib(num) {
        // if (num in cache) {
        //     return cache[num]; // Return cached value if available
        // }

        let arr = [0, 1]

        for (let i = 0; i <= num; i++) {
            console.log('arr',arr);
            
            let addition = arr[0] + arr[1];
            arr[0] = arr[1];
            arr[1] = addition;
        }

        // console.log('cache[num]', cache[num])
        return cache[num];
    }


}

let fibo = calcFibo();
console.log(fibo(5))