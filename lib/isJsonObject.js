'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isJsonObject = void 0;
function isJsonObject(value) {
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
exports.isJsonObject = isJsonObject;
//# sourceMappingURL=isJsonObject.js.map
