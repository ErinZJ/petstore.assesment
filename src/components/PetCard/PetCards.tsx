import { useState } from "react";
import { Toggle } from "../Toggle";
import { ViewPetModal } from "../ViewPetModal";
import { PetCard } from "./PetCard";
import { usePetStatus } from "../../hooks/useGetPetStatus";

type TabValue = "available" | "pending" | "sold";

export const PetCards = () => {
  const [selectedStatus, setSelectedStatus] = useState<TabValue>("available");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const { data: pets, isLoading, error } = usePetStatus(selectedStatus);

  const handleView = (petId: number) => {
    setSelectedPetId(petId);
    setIsModalOpen(true);
    console.log("View pet:", petId);
  };

  const handleEdit = (petId: number) => {
    console.log("Edit pet:", petId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPetId(null);
  };

  const handleTabChange = (tab: TabValue) => {
    setSelectedStatus(tab);
  };

  const selectedPet = pets?.find((pet) => pet.id === selectedPetId);

  return (
    <div className="p-4">
      <div className="mb-6">
        <Toggle onTabChange={handleTabChange} defaultTab="available" />
      </div>
      {isLoading && (
        <div className="text-center text-gray-500 py-8">Loading pets...</div>
      )}
      {error && (
        <div className="text-center text-red-500 py-8">
          Error: {error.message}
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pets && pets.length > 0 ? (
            pets.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                description={pet.category?.name || "No description"}
                status={pet.status}
                category={pet.category?.name || "Unknown"}
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
      )}
      {selectedPet && (
        <ViewPetModal
          onClose={handleCloseModal}
          isOpen={isModalOpen}
          name={selectedPet.name}
          description={selectedPet.category?.name || "No description"}
          status={selectedPet.status}
          category={selectedPet.category?.name || "Unknown"}
        />
      )}
    </div>
  );
};
