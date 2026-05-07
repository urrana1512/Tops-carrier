// Custom Module 3: Time & Greeting Helper
// Task 21 Requirement: Export a function
module.exports = function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning, Developer!";
    if (hour < 18) return "Good Afternoon, Architect!";
    return "Good Evening, System Administrator!";
};
