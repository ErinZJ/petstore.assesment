import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export function useDeletePet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (petId: number) => {
      await axios.delete(`${baseUrl}/pet/${petId}`, {
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
