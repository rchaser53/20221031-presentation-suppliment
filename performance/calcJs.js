const { createCalc } = require('./utils');

const fibJs = (n) => {
    return n < 2 ? n : fibJs(n - 1)  + fibJs(n - 2)
};
const calcJs = createCalc(fibJs);
[30,40].forEach((num) => {
    calcJs(num, 3, "js");
});
