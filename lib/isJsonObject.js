'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isJSONObject = void 0;
function isJSONObject(value) {
  if (typeof value !== 'string') {
    return false;
  }
  try {
    const parsedValue = JSON.parse(value);
    return typeof parsedValue === 'object';
  } catch (error) {
    return false;
  }
}
exports.isJSONObject = isJSONObject;
//# sourceMappingURL=isJSONObject.js.map
