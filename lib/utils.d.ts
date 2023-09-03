export declare function hasBinaryData(obj: Record<string, any>): boolean;
export declare function isJSONObject(value: string): boolean;
export declare function jsonToFormData(obj: Record<string, any>): FormData;
export declare function objectsEqual(obj1: any, obj2: any): boolean;
export declare function convertToCurrencySystem(labelValue: number): string | number;
export declare function removeKeyFromObject<T, K extends keyof T>(obj: T, key: K): Omit<T, K>;
export declare function assignZeroToKey(arr: Record<string, any>[], key: string): Record<string, any>[];
export declare function assignZeroToKeys(arr: Record<string, any>[], keys: string[]): Record<string, any>[];
export declare function removeOrAddStringFromArray(arr: string[], targetString: string): string[];
export declare function removeOrAddObjectFromArray<T>(arr: T[], targetObject: T): T[];
export declare function calculatePercentage(total: number, value: number): number;
export declare function calculatePercentageAndInjectValue(
  arr: Record<string, any>[],
  key: string,
): Record<string, any>[];
export declare function getSumOfKey(data: Record<string, any>[], key: string): any;
export declare function setZeroValueForObjectsWithKeyValues(
  arr: Record<string, any>[],
  key: string,
  values: string[],
): Record<string, any>[];
type scrollToComponentProps = {
  componentId: string;
  focusAfterScroll: boolean;
};
export declare function scrollToComponent({ componentId, focusAfterScroll }: scrollToComponentProps): void;
export declare function replaceObjectAtPosition<T>(arr: T[], position: number, newObj: T): T[];
export declare function convertObject(input: Record<string, any>): any;
export declare function removeObjectAtIndex<T>(array: T[], index: number): T[];
export declare function dividePercentageIntoEqualParts(array: Record<string, any>[]): Record<string, any>[];
export declare function addCheckedFieldByString<T>(objects: T[], strings: string[], chooseKey: keyof T): T[];
export declare function splitArrayToMultipleArrayOfSize(
  array: Record<string, any>[],
  size: number,
): Record<string, any>[][];
export declare function getPercentage(x: number, y: number): number;
export declare function IntersectionOfObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): Record<string, any>;
export declare function getFileExtension(url: string | undefined): string | null;
export declare function removeObjectFromArrayOfObjects(
  objects: Record<string, any>[],
  object: Record<string, any>,
): Record<string, any>[];
export declare function splitArrayByIteratorId(
  arr: Record<string, any>[],
): [Record<string, any>[], Record<string, any>[]];
export declare function parseToBollean(val: string): boolean;
export declare function groupArrayOfObjectsByValueOfAKey(
  arr: Record<string, any>[],
  key: string,
): Record<string, any>[][];
export declare function countKeyInJSON(json: any, key: string): number;
export declare function dividePercentage(json: any, key: string): any;
export declare function extractUniqueValuesByKey(data: Record<string, any>[], key: string): string[];
export declare function filterObjectsByKeyAndValue(
  array: Record<string, any>[],
  key: string,
  value: any,
): Record<string, any>[];
export declare function removeValueFromArray(arr: string[], value: string): string[];
export declare function formatNumberWithCommas(value: number): string;
export declare function isEmptyObjectOrArray(obj: Record<string, any> | any[]): boolean;
export declare function findMinMaxValues(
  arr: any[],
  key: string,
): {
  min: any;
  max: any;
};
export declare function itemsWithPercentage(arr: any[]): any[];
export {};
