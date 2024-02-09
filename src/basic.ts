import { CreateArray, SortArray } from "./types";

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
