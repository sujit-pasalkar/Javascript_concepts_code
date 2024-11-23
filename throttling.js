let clickCount = triggerCount = 0;
const clickCountE = document.querySelector('.clickCount');
const triggerCountE = document.querySelector('.triggerCount');

const throttleFn = (cb, d = 800) => {
    // edge search logic
    let timeout = null;
    return (...args) => {
        clickCount += 1;
        clickCountE.innerHTML = clickCount;

        if (!timeout) {
            cb(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, d);
        }
    }

    // with boolean 
    // let shouldWait = false
    // return function (...args) {
    //     // already execution is started 
    //     if (shouldWait) return
    //     cb(...args)
    //     shouldWait = true
    //     setTimeout(() => {
    //         shouldWait = false
    //     }, d)
    // }

    // roadside coder code 
    // let last = 0;
    // return (...args) => {
    //     let now = new Date().getTime();
    //     if (now - last < d) return;
    //     last = now;
    //     return cb(...args);
    // }
}

const throttle = throttleFn(() => {
    triggerCount += 1;
    triggerCountE.innerHTML = triggerCount;
});