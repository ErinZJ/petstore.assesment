import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { NewPetData } from "../types/newPetData";

export function useAddNewPet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPet: NewPetData) => {
      const { data } = await axios.post<NewPetData>(
        "https://petstore.swagger.io/v2/pet",
        {
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
  });
}
