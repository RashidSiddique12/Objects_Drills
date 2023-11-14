// Fill in undefined properties that match properties on the `defaultProps`
//parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

const defaultsFn = require("../defaults");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const resultObj = defaultsFn(testObject, { name: "Batman", power: "Money" });
console.log(resultObj);
