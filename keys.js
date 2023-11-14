const keysFn = function keys(obj) {
  let store = [];
  for (let key in obj) {
    store.push(key);
  }
  return store;
};

module.exports = keysFn;
