import {
  createArray,
  randomizeArray,
  mergeArrays,
  removeAllValues,
  removeByIndex,
  sortArray,
} from "../basic";

describe("createArray", () => {
  it("return array as expected from correct input", () => {
    const resultArr = createArray({ length: 1 });
    expect(resultArr).toHaveLength(1);
  });

  it("throws RangeError when passed negative length", () => {
    try {
      createArray({ length: -1 });
    } catch (error) {
      if (error instanceof RangeError) {
        expect(error.name).toBe("RangeError");
      }
    }
  });
});

describe("randomizeArray", () => {
  const array = [1, 2, "22", "string", "anotherString"];

  it("returns randomized array as expected with correct args", () => {
    const result = randomizeArray(array);

    expect(result).not.toEqual(array);
  });

  it("check if returned array have the same values as the inserted one", () => {
    const result = randomizeArray(array);

    array.forEach((value) => expect(result.includes(value)).toBeTruthy());
  });

  it("returns single value array", () => {
    const array = [1];
    const result = randomizeArray(array);

    expect(result).toEqual(array);
  });
});

describe("mergeArrays", () => {
  const array1 = ["val", "val2"];
  const array2 = [2, 3, 4, 3];

  it("returns merged arrays with correct length", () => {
    const result = mergeArrays([array1, array2]);

    expect(result).toHaveLength(array1.length + array2.length);
  });

  it("returns merged arrays and checks the values", () => {
    const result = mergeArrays([array1, array2]);

    array1.forEach((value) => expect(result.includes(value)).toBeTruthy());
    array2.forEach((value) => expect(result.includes(value)).toBeTruthy());
  });

  it("returns merged empty arrays", () => {
    const result = mergeArrays([[], []]);

    expect(result).toHaveLength(0);
  });
});

describe("removeAllValues", () => {
  const array = [1, 2, 3, "str", 3, "str"];

  it("returns array without specified value", () => {
    const result = removeAllValues({ arr: array, value: 3 });

    expect(result.includes(3)).toBeFalsy();
  });

  it("check for no change if value is not present in array", () => {
    const result = removeAllValues({ arr: array, value: "missing value" });

    expect(result).toStrictEqual(array);
  });
});

describe("removeByIndex", () => {
  const array = ["one", "two", "three"];

  it("removes only 1 item from array", () => {
    const result = removeByIndex({ arr: array, index: 1 });

    expect(result.includes("one")).toBeTruthy();
    expect(result.includes("two")).toBeFalsy();
    expect(result.includes("three")).toBeTruthy();
    expect(result).toHaveLength(array.length - 1);
  });

  it("returns array with only 1 item removed", () => {
    const result = removeByIndex({ arr: array, index: 2 });

    expect(result).toHaveLength(array.length - 1);
  });

  it("negative index passed (nothing should change)", () => {
    const result = removeByIndex({ arr: array, index: -2 });

    expect(result).toStrictEqual(array);
  });

  it(" higher index than length passed (nothing should change)", () => {
    const result = removeByIndex({ arr: array, index: 22 });

    expect(result).toStrictEqual(array);
  });
});

describe("sortArray", () => {
  const array = ["one", 99999, "two", 1, 2, 8, 4, "three"];

  it("sorts the array in Ascending order", () => {
    const result = sortArray({ arr: array, order: "ASC" });
    const last = result.pop();
    expect(last).toBe("two");
  });

  it("sorts the array in Ascending order", () => {
    const result = sortArray({ arr: array, order: "DESC" });
    const last = result.pop();
    expect(last).toBe("1");
  });
});

// describe("",()=>{

// })
