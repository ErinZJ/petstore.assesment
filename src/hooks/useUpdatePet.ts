import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Pet } from "../types/petStatus";
import { baseUrl } from "./baseUrl";

export function useUpdatePet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedPet: Pet) => {
      const { data } = await axios.put<Pet>(`${baseUrl}/pet`, updatedPet, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });
}
