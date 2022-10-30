const createCalc = (fn) => (n, count, label) => {
    for (let i=0;i<count;i++) {
        console.time(label);
        fn(n);
        console.timeEnd(label);
    }    
}

module.exports = {
    createCalc
}