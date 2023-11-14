function keysOfobj(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

const pairsFn = function pairs(obj) {
  let keys = keysOfobj(obj);
  let pair = Array(keys.length);
  for (let i = 0; i < keys.length; i++) {
    pair[i] = [keys[i], obj[keys[i]]];
  }
  return pair;
};

module.exports = pairsFn;
