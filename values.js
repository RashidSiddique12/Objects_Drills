const valuesFn = function values(obj) {
  const store = [];
  for (let key in obj) {
    store.push(obj[key]);
  }
  return store;
};

module.exports = valuesFn;
