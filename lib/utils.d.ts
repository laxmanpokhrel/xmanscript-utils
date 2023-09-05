export declare function partitionObjectsByKey(
  arr: Record<string, any>[],
  key: string,
): [Record<string, any>[], Record<string, any>[]];
export declare function containsBinaryData(obj: Record<string, any>): boolean;
export declare function isJSONObject(value: string): boolean;
export declare function objectToFormDataWithFiles(obj: Record<string, any>): FormData;
export declare function areObjectsEqual(obj1: any, obj2: any): boolean;
export declare function abbreviateCurrencyValue(labelValue: number): string | number;
export declare function omitKey<T, K extends keyof T>(obj: T, key: K): Omit<T, K>;
export declare function setKeyToZeroInObjects(arr: Record<string, any>[], key: string): Record<string, any>[];
export declare function setKeysToZeroInObjects(arr: Record<string, any>[], keys: string[]): Record<string, any>[];
export declare function toggleStringInArray(arr: string[], targetString: string): string[];
export declare function toggleObjectInArray<T>(arr: T[], targetObject: T): T[];
export declare function calculateAndInjectPercentageByMaxValue(
  arr: Record<string, any>[],
  key: string,
): Record<string, any>[];
export declare function calculateAndInjectPercentageBySum(
  arr: Record<string, any>[],
  key: string,
): Record<string, any>[];
export declare function calculateSumOfKey(data: Record<string, any>[], key: string): number;
export declare function setZeroValueForMatchingValuesOfAKey(
  arr: Record<string, any>[],
  key: string,
  values: string[],
): Record<string, any>[];
type scrollToComponentProps = {
  componentId: string;
  focusAfterScroll: boolean;
};
export declare function scrollToComponent({ componentId, focusAfterScroll }: scrollToComponentProps): void;
export declare function convertNestedKeysToObject(input: Record<string, any>): any;
export declare function distributePercentageEquallyWithRemainder(array: Record<string, any>[]): Record<string, any>[];
export declare function markCheckedByStringMatch<T>(objects: T[], strings: string[], chooseKey: keyof T): T[];
export declare function splitArrayIntoChunks(array: Record<string, any>[], size: number): Record<string, any>[][];
export declare function intersectObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any>;
export declare function getFileExtension(url: string | undefined): string | null;
export declare function removeObjectFromArray(
  objects: Record<string, any>[],
  object: Record<string, any>,
): Record<string, any>[];
export declare function parseToBollean(val: string): boolean | undefined;
export declare function groupArrayOfObjectsByValueOfAKey(
  arr: Record<string, any>[],
  key: string,
): Record<string, any>[][];
export declare function countKeyOccurrences(json: any, key: string): number;
export declare function distributePercentageEquall(json: any, key: string): any;
export declare function uniqueValuesOfKey(data: Record<string, any>[], key: string): string[];
export declare function formatNumberToCommaString(value: number): string;
export declare function getMinMax(
  arr: any[],
  key: string,
): {
  min: any;
  max: any;
};
export {};
