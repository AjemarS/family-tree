export interface ILeaf {
  x: number;
  y: number;
  text: string;
  Meta: {
    name: string;
    gender: "male" | "female";
    dateOfBirth: string;
    description: string;
    image: string | null;
  };
}

export interface StageState {
  items: { id: number; item: ILeaf }[];
}

export interface IAncestorFormData {
  name: string;
  gender: "male" | "female";
  dateOfBirth: string;
  description: string;
  image: File | null;
}
