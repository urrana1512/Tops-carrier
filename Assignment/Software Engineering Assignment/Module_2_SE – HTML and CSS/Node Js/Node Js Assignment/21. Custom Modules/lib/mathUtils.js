// Custom Module 2: Math Utilities
// Task 21 Requirement: Export a function
module.exports = function calculateArea(radius) {
    if (radius < 0) return 0;
    const area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
};
