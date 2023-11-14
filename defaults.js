const defaultsFn = function defaults(obj, defaultProps) {
  for (let key in defaultProps) {
    if (!obj.hasOwnProperty(key)) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
};

module.exports = defaultsFn;
