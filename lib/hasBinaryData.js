'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.hasBinaryData = void 0;
function hasBinaryData(obj) {
  if (typeof obj !== 'object') {
    return false;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value instanceof Blob || value instanceof File || value instanceof ArrayBuffer) {
        return true;
      }
      if (typeof value === 'object' && hasBinaryData(value)) {
        return true;
      }
    }
  }
  return false;
}
exports.hasBinaryData = hasBinaryData;
//# sourceMappingURL=hasBinaryData.js.map
