import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Pet } from "../types/petStatus";

export function usePetStatus(status: "available" | "pending" | "sold") {
  return useQuery({
    queryKey: ["pets", status],
    queryFn: async () => {
      const { data } = await axios.get<Pet[]>(
        `https://petstore.swagger.io/v2/pet/findByStatus`,
        { params: { status } },
      );
      return data;
    },
  });
}
