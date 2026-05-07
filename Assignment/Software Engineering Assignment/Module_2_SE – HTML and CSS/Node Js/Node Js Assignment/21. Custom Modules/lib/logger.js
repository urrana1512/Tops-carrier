// Custom Module 1: Logger Utility
// Task 21 Requirement: Export a function
module.exports = function logMessage(message) {
    const timestamp = new Date().toLocaleTimeString();
    return `[MODULAR_OS] [${timestamp}] LOG: ${message}`;
};
