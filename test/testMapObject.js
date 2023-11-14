// Like map for arrays, but for objects.
//Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject

const mapObjectFn = require("../mapObject");
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

const modifiedObj = mapObjectFn(testObject, (x) => {
  return x === "Bruce Wayne" ? "Batman" : x;
});

console.log(modifiedObj);
