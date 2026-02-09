import { useState } from "react";
import { mockPets } from "../data/mockPets";
import { Toggle } from "./Toggle";
import { ViewPetModal } from "./ViewPetModal";
import { PetCard } from "./PetCard";

type TabValue = "available" | "pending" | "sold";

export const PetCards = () => {
  const [selectedStatus, setSelectedStatus] = useState<TabValue>("available");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const handleView = (petId: number) => {
    setSelectedPetId(petId);
    setIsModalOpen(true);
    console.log("View pet:");
  };

  const handleEdit = (petId: number) => {
    console.log("Edit pet:", petId);
  };

  // Filter pets based on selected status
  const filteredPets = mockPets.filter((pet) => pet.status === selectedStatus);

  // Find the selected pet
  const selectedPet = mockPets.find((pet) => pet.id === selectedPetId);

  return (
    <div className="p-4">
      <div className="mb-6">
        <Toggle onTabChange={setSelectedStatus} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              description={pet.description}
              status={pet.status}
              category={pet.category}
              viewClick={() => handleView(pet.id)}
              editClick={() => handleEdit(pet.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            No pets found with status "{selectedStatus}"
          </div>
        )}
      </div>

      {selectedPet && (
        <ViewPetModal
          isOpen={isModalOpen}
          name={selectedPet.name}
          description={selectedPet.description}
          status={selectedPet.status}
          category={selectedPet.category}
        />
      )}
    </div>
  );
};
