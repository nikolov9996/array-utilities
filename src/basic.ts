import {
  CreateArray,
  RemoveAllValues,
  RemoveByIndex,
  RemoveDuplicates,
  RemoveValue,
  SortArray,
} from "./types";

export function createArray({ length }: CreateArray): number[] {
  // creating array of [1,1,1] for example
  return Array(length).fill(1);
}

export function sortArray({ arr, order }: SortArray): any[] {
  // sorting simple array of strings, numbers or strings and numbers (mixed)
  if (order === "ASC") {
    return arr
      .map((x) => x.toString())
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }

  return arr
    .map((x) => x.toString())
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
}

export function randomizeArray(array: any[]): any[] {
  const newArray = [...array]; // Create a copy of the original array to avoid modifying it directly
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function mergeArrays(arr: any[][]): any[] {
  return arr.flat();
}

export function removeByIndex({ arr, index }: RemoveByIndex) {
  if (isNaN(Number(index))) {
    // if index is not numeric it returns not modified array
    return arr;
  }

  if (Number(index) > arr.length) {
    return arr;
  }

  if (Number(index) > -1) {
    const temp = [...arr];
    temp.splice(Number(index), 1);
    return temp;
  }

  return arr;
}

export function removeValue({ arr, value }: RemoveValue) {
  const index = arr.indexOf(value);
  // returns not modified array if value is not found
  if (index > -1) {
    const temp = [...arr];
    temp.splice(index, 1);
    return temp;
  }

  return arr;
}

export function removeAllValues({ arr, value }: RemoveAllValues) {
  // removes all values that match the input value
  // returns not modified array if value is not found
  let i = 0;
  const temp = [...arr];

  while (i < temp.length) {
    if (temp[i] === value) {
      temp.splice(i, 1);
    } else {
      ++i;
    }
  }
  return temp;
}

export function removeDuplicates({ arr }: RemoveDuplicates) {
  return [...new Set(arr)];
}
