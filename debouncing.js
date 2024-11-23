var clickCount = 0;
var triggerCount = 0;
const clickCountE = document.querySelector('.d_clickCount');
const triggerCountE = document.querySelector('.d_triggerCount');



const debouncing = (cb, delay = 800) => {
    let timeout;
    return function (...args) {
        clickCount += 1;
        clickCountE.innerHTML = clickCount;

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay)
    };



    // let timer;
    // return (...args) => {
        // clickCount += 1;
        // clickCountE.innerHTML = clickCount;

    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //         cb.call(this, args)
    //     }, delay)
    // }

}



const debounce = debouncing(() => {

    triggerCount += 1;
    triggerCountE.innerHTML = triggerCount;
})