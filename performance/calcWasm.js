const wasm = require('./wasmLib/wasm_sample');
const { createCalc } = require('./utils');

const calcWasm = createCalc(wasm.fib);
;([20,30,40]).forEach((num) => {
    calcWasm(num, 30, "wasm");
})
