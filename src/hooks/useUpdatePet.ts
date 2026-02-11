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
    onSuccess: (updatedPet) => {
      // Invalidate and refetch pets queries to show the updated pet
      queryClient.invalidateQueries({ queryKey: ["pets"] });

      // Optionally update specific cache entries
      queryClient.setQueryData(
        ["pets", updatedPet.status],
        (oldData: Pet[] | undefined) => {
          if (oldData) {
            return oldData.map((pet) =>
              pet.id === updatedPet.id ? updatedPet : pet,
            );
          }
          return oldData;
        },
      );
    },
    onError: (error) => {
      console.error("Failed to update pet:", error);
    },
  });
}
