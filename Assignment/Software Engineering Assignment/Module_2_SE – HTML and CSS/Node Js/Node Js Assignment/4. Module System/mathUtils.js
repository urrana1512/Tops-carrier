/**
 * Module: mathUtils.js
 * Purpose: Export mathematical utility functions
 */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

// Exporting functions using CommonJS
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
