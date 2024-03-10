import { FindByValue } from "./types";


export  function findByValue({ arr, key, value }: FindByValue): any | undefined {
    const temp = [...arr];
    return temp.find((item) => item[key] === value);
}