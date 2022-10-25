import init, { fib } from './wasm_sample.js';

const fibJs = (n) => {
    return n < 2 ? n : fibJs(n - 1)  + fibJs(n - 2)
};

(async () => {
    console.time('js');
    console.log(fibJs(39));
    console.timeEnd('js');

    await init();
    console.time('wasm');
    console.log(fib(39));
    console.timeEnd('wasm');
})();
