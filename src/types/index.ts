export interface ILeaf {
  x: number;
  y: number;
  text: string;
}

export interface StageState {
  items: { id: number; item: ILeaf }[];
}
