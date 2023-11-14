// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

const valuesFn = require("../values");
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const valuesOfData = valuesFn(testObject);
console.log(valuesOfData);
