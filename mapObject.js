const mapObjectFn = function mapObject(obj, cb) {
  const store = {};
  for (let key in obj) {
    store[key] = cb(obj[key]);
  }
  return store;
};

module.exports = mapObjectFn;
