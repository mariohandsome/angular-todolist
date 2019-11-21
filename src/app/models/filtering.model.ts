export interface FilterButton {
  type: Filter;
  label: string;
  active: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}
