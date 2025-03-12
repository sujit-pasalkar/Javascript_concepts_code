function calcFibo(num) {
    let start = 0, end = 1;
    let fibArr = [start];

    for (let i = 0; i <= num; i++) {
        let addition = start + end;
        start = end;
        end = addition;
        fibArr.push(addition)
    }
    return fibArr;

}
console.log(calcFibo(5));