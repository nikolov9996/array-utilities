export type CreateArray = {
  length: number;
};

export type SortArray = {
  arr: (string | number)[];
  order: "ASC" | "DESC";
};

export type RemoveByIndex = {
  arr: any[];
  index: string | number; // in case of using pure js and index comes as string
};

export type RemoveValue = {
  arr: any[];
  value: string | number;
};

export type RemoveAllValues = {
  arr: any[];
  value: string | number;
};

export type RemoveDuplicates = {
  arr: any[];
};
