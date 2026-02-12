import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Pet, PetStatus } from "../types/petStatus";

export function usePetStatus(status: PetStatus[]) {
  return useQuery({
    queryKey: ["pets", status],
    queryFn: async () => findByStatus(status),
  });
}
async function findByStatus(status: PetStatus[]) {
  const { data } = await axios.get<Pet[]>(
    `https://petstore.swagger.io/v2/pet/findByStatus`,
    { params: { status: status.join(",") } },
  );
  return data;
}
