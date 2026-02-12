export type NewPetData = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls?: string[];
  
  status: "available" | "pending" | "sold";
};
