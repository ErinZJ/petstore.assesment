import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Pet } from "../types/petStatus";
import type { NewPetData } from "../types/newPetData";

export function useAddNewPet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPet: NewPetData) => {
      const { data } = await axios.post<Pet>(
        "https://petstore.swagger.io/v2/pet",
        {
          id: 0,
          ...newPet,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
    onError: (error) => {
      console.error("Failed to add new pet:", error);
    },
  });
}
