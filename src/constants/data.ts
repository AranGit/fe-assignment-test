//First assignment
export type ItemType = "Fruit" | "Vegetable";

export interface TodoItem {
  type: ItemType;
  name: string;
}

export const INITIAL_DATA: TodoItem[] = [
  { type: "Fruit", name: "Apple" },
  { type: "Vegetable", name: "Broccoli" },
  { type: "Vegetable", name: "Mushroom" },
  { type: "Fruit", name: "Banana" },
  { type: "Vegetable", name: "Tomato" },
  { type: "Fruit", name: "Orange" },
  { type: "Fruit", name: "Mango" },
  { type: "Fruit", name: "Pineapple" },
  { type: "Vegetable", name: "Cucumber" },
  { type: "Fruit", name: "Watermelon" },
  { type: "Vegetable", name: "Carrot" },
];

//Second assignment
export interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hair: {
    color: string;
  };
  address: {
    postalCode: string;
  };
  company: {
    department: string;
  };
}

export interface DepartmentSummary {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
  _minAge?: number;
  _maxAge?: number;
}

export interface GroupedData {
  [department: string]: DepartmentSummary;
}
