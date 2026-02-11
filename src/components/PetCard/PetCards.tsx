import { useState } from "react";
import { Toggle } from "../Toggle";
import { ViewPetModal } from "../ViewPetModal";
import { EditPetModal } from "../EditPetModal";
import { PetCard } from "./PetCard";
import { usePetStatus, type PetStatus } from "../../hooks/useGetPetStatus";
import { NewPet } from "../NewPet/NewPet";

export const PetCards = () => {
  const [selectedStatus, setSelectedStatus] = useState<PetStatus[]>([
    "available",
  ]);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const { data: pets, isLoading, error } = usePetStatus(selectedStatus);

  const handleView = (petId: number) => {
    setSelectedPetId(petId);
    setIsViewModalOpen(true);
    console.log("View pet:", petId);
  };

  const handleEdit = (petId: number) => {
    setSelectedPetId(petId);
    setIsEditModalOpen(true);
    console.log("Edit pet:", petId);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedPetId(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedPetId(null);
  };

  const handleTabChange = (tab: PetStatus) => {
    if (selectedStatus.includes(tab)) {
      setSelectedStatus(selectedStatus.filter((status) => status !== tab));
    } else {
      setSelectedStatus([...selectedStatus, tab]);
    }
  };

  const selectedPet = pets?.find((pet) => pet.id === selectedPetId);

  return (
    <div className="p-4">
      <div className="mb-6 flex justify-between">
        <Toggle onTabChange={handleTabChange} selectedTabs={selectedStatus} />
        <div className="flex justify-between">
          <NewPet />
        </div>
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] grid-rows-auto gap-4">
          {pets && pets.length > 0 ? (
            pets.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                description={pet.category?.name || "No description"}
                status={pet.status}
                category={pet.category?.name || "Unknown"}
                tag={pet.tags?.map((tag) => tag.name) || []}
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
          onClose={handleCloseViewModal}
          isOpen={isViewModalOpen}
          name={selectedPet.name}
          description={selectedPet.category?.name || "No description"}
          status={selectedPet.status}
          category={selectedPet.category?.name || "Unknown"}
        />
      )}
      {selectedPet && (
        <EditPetModal
          key={selectedPet.id}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          pet={selectedPet}
        />
      )}
    </div>
  );
};
