// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

const keysFn = require("../keys");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const keysOfData = keysFn(testObject);
console.log(keysOfData);
