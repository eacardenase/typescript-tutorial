"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * Create a promise tha resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add two numbers
 * @param a first number
 * @param b second number
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
(async () => {
    console.log(await addNumbers(3, 4));
})();
