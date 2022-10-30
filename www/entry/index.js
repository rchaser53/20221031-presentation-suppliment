import init, { fib } from './wasm_sample.js';

;(async () => {
    await init();
    console.log(fib(20));
})();
