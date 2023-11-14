// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

const pairsFn = require("../pairs");
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const pairsOfObj = pairsFn(testObject);
console.log(pairsOfObj);
