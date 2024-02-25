"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnShortArray(ar1, ar2) {
    return ar1.length > ar2.length ? ar1 : ar2;
}
/**
 * The function `getDifferenceObject` compares two objects and returns a new object containing the
 * differences between them.
 * @param object1 - The first object to compare. It should be of type `Record<string, any>`, which
 * means it can have any number of properties of any type.
 * @param object2 - The `object2` parameter is a record (object) containing key-value pairs.
 * @returns a record object that represents the difference between `object1` and `object2`.
 */
function getDifferenceObject(object1, object2) {
    const differenceObj = {};
    //   get the keys of the object
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);
    returnShortArray(obj1Keys, obj2Keys).forEach(key => {
        if (object1[key] !== object2[key] && typeof object1[key] === 'object' && typeof object2[key] === 'object') {
            // if the values are objects we do recursion
            const diff = getDifferenceObject(object1[key], object2[key]);
            //   if the diff has keys
            if (Object.keys(diff).length) {
                differenceObj[key] = diff;
            }
            return;
        }
        if (object1[key] !== object2[key]) {
            differenceObj[key] = object2[key];
        }
    });
    return differenceObj;
}
exports.default = getDifferenceObject;
//# sourceMappingURL=getDifferenceObject.js.map