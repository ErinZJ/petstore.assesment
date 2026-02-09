import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Pet } from "../types/petStatus";

export type PetStatus = "available" | "pending" | "sold";

export function usePetStatus(status: PetStatus[]) {
  return useQuery({
    queryKey: ["pets", status],
    queryFn: async () => {
      const allStatuses = status.map(async (state) => findByStatus(state));
      return Promise.all(allStatuses).then((statuses) => statuses.flat());
    },
  });
}
async function findByStatus(status: PetStatus) {
  const { data } = await axios.get<Pet[]>(
    `https://petstore.swagger.io/v2/pet/findByStatus`,
    { params: { status } },
  );
  return data;
}
