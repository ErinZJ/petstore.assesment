import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Pet } from "../types/petStatus";

export function useUpdatePet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedPet: Pet) => {
      const { data } = await axios.put<Pet>(
        "https://petstore.swagger.io/v2/pet",
        updatedPet,
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
      console.error("Failed to update pet:", error);
    },
  });
}
