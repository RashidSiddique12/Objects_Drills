invertFn = function invert(obj) {
  let invertedObj = {};
  for (let key in obj) {
    invertedObj[obj[key]] = key;
  }
  return invertedObj;
};

module.exports = invertFn;
