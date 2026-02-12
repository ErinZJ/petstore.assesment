import { useState } from "react";
import { Toggle } from "../Toggle";
import { ViewPetModal } from "../ViewPetModal";
import { EditPetModal } from "../EditPetModal";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal";
import { PetCard } from "./PetCard";
import { usePetStatus } from "../../hooks/useGetPetStatus";
import { NewPet } from "../NewPet/NewPet";
import type { PetStatus } from "../../types/petStatus";
import { Spinner } from "../Spinner";

export const PetCards = () => {
  const [selectedStatus, setSelectedStatus] = useState<PetStatus[]>([
    "available",
  ]);
  const [modalType, setModalType] = useState<"view" | "edit" | "delete" | null>(
    null,
  );
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const { data: pets, isPending, error } = usePetStatus(selectedStatus);

  const handleView = (petId: number) => {
    setSelectedPetId(petId);
    setModalType("view");
    console.log("View pet:", petId);
  };

  const handleEdit = (petId: number) => {
    setSelectedPetId(petId);
    setModalType("edit");
    console.log("Edit pet:", petId);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedPetId(null);
  };

  const handleTabChange = (tab: PetStatus) => {
    if (selectedStatus.includes(tab)) {
      setSelectedStatus(selectedStatus.filter((status) => status !== tab));
    } else {
      setSelectedStatus([...selectedStatus, tab]);
    }
  };
  const handleDelete = (petId: number) => {
    setSelectedPetId(petId);
    setModalType("delete");
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
      {isPending && <Spinner />}
      {error && (
        <div className="text-center text-red-500 py-8">Failed to load pets</div>
      )}
      {!isPending && !error && (
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
                onViewClick={() => handleView(pet.id)}
                onEditClick={() => handleEdit(pet.id)}
                onDeleteClick={() => handleDelete(pet.id)}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              {selectedStatus.length > 0
                ? `No pets found with status "${selectedStatus.join(", ")}"`
                : "No status selected"}
            </div>
          )}
        </div>
      )}
      {selectedPet && (
        <ViewPetModal
          onClose={handleCloseModal}
          isOpen={modalType === "view"}
          name={selectedPet.name}
          description={selectedPet.category?.name || "No description"}
          status={selectedPet.status}
          category={selectedPet.category?.name || "Unknown"}
          tag={selectedPet.tags?.map((tag) => tag.name) || []}
        />
      )}
      {selectedPet && (
        <EditPetModal
          key={selectedPet.id}
          isOpen={modalType === "edit"}
          onClose={handleCloseModal}
          pet={selectedPet}
        />
      )}
      {modalType === "delete" && selectedPet && (
        <ConfirmDeleteModal onClose={handleCloseModal} pet={selectedPet} />
      )}
    </div>
  );
};
