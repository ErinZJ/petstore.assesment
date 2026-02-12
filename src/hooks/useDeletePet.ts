import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeletePet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (petId: number) => {
      console.log("🗑️ Deleting pet with ID:", petId);

      await axios.delete(`https://petstore.swagger.io/v2/pet/${petId}`, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return petId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });
}
