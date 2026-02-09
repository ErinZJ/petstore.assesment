export interface Pet {
  id: number;
  name: string;
  description: string;
  status: "available" | "pending" | "sold";
  category: string;
}

export const mockPets: Pet[] = [
  {
    id: 1,
    name: "Buddy",
    description: "A friendly golden retriever who loves to play fetch and swim",
    status: "available",
    category: "Dog",
  },
  {
    id: 2,
    name: "Luna",
    description: "A playful and curious kitten with beautiful blue eyes",
    status: "available",
    category: "Cat",
  },
  {
    id: 3,
    name: "Max",
    description: "An energetic German Shepherd perfect for active families",
    status: "pending",
    category: "Dog",
  },
  {
    id: 4,
    name: "Whiskers",
    description: "A calm and affectionate tabby cat who loves to cuddle",
    status: "available",
    category: "Cat",
  },
  {
    id: 5,
    name: "Charlie",
    description: "A small and adorable beagle with lots of personality",
    status: "pending",
    category: "Dog",
  },
  {
    id: 6,
    name: "Mittens",
    description: "A fluffy Persian cat with a gentle and sweet temperament",
    status: "available",
    category: "Cat",
  },
];
