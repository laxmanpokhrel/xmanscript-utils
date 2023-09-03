'use strict';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.jsonToFormData = void 0;
const isJSONObject_1 = require('./isJSONObject');
function jsonToFormData(obj) {
  const formData = new FormData();
  const { file } = obj,
    rest = __rest(obj, ['file']);
  file.forEach((item) => {
    formData.append('file', item);
  });
  Object.keys(rest).forEach((key) => {
    const value = rest[key];
    if (Array.isArray(value) || (0, isJSONObject_1.isJSONObject)(value)) formData.append(key, JSON.stringify(value));
    else formData.append(key, value);
  });
  return formData;
}
exports.jsonToFormData = jsonToFormData;
//# sourceMappingURL=jsonToFormData.js.map
