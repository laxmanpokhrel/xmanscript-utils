"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isJSONObject_1 = __importDefault(require("./isJSONObject"));
/**
 * The function `objectToFormDataWithFiles` converts a JSON object into a FormData object, handling file uploads
 * and nested objects.
 * @param obj - The `obj` parameter is an object that contains key-value pairs. The keys represent the
 * names of the form fields, and the values represent the corresponding values for those fields. The
 * values can be of any type, including strings, numbers, booleans, arrays, or objects. Additionally,
 * the `
 * @returns a FormData object.
 */
function objectToFormDataWithFiles(obj) {
    const formData = new FormData();
    const { file } = obj, rest = __rest(obj, ["file"]);
    file.forEach((item) => {
        formData.append('file', item);
    });
    Object.keys(rest).forEach(key => {
        const value = rest[key];
        if (Array.isArray(value) || (0, isJSONObject_1.default)(value))
            formData.append(key, JSON.stringify(value));
        else
            formData.append(key, value);
    });
    return formData;
}
exports.default = objectToFormDataWithFiles;
//# sourceMappingURL=objectToFormDataWithFiles.js.map