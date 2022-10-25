import init, { fib } from './wasm_sample.js';




(async () => {
    const node = document.querySelector("#test");
    const fibJs = (n) => {
        const v = n < 2 ? n : fibJs(n - 1)  + fibJs(n - 2)
        node.innerHTML = v;
        return v
    };

    console.time('js');
    // console.log(fibJs(39));
    console.log(fibJs(30));
    console.timeEnd('js');


    // await init();
    // console.time('wasm');
    // // console.log(fib(39));
    // console.log(fib(39));
    // console.timeEnd('wasm');
})();

// init().then((ret) => {

// })

