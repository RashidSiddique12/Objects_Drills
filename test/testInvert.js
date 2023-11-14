// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert
const invertFn = require("../invert");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const invertedObj = invertFn(testObject);
console.log(invertedObj);
