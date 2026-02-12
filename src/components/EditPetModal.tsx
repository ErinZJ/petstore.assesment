import { useState } from "react";
import { useUpdatePet } from "../hooks/useUpdatePet";
import type { Pet, PetStatus } from "../types/petStatus";

type EditPetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet;
};

interface PetFormData {
  id: number;
  name: string;
  category: string;
  status: PetStatus;
  tags: string[];
  photoUrls?: string[];
}

export const EditPetModal = ({ isOpen, onClose, pet }: EditPetModalProps) => {
  const updatePetMutation = useUpdatePet();

  const [formData, setFormData] = useState<PetFormData>({
    id: pet.id,
    name: pet.name || "",
    category: pet.category?.name || "",
    status: pet.status || "available",
    tags: pet.tags?.map((tag) => tag.name) || [],
    photoUrls: pet.photoUrls || [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePetMutation.mutate(
      {
        id: pet.id,
        name: formData.name,
        category: {
          id: pet.category?.id || 0,
          name: formData.category,
        },
        status: formData.status,
        photoUrls: pet.photoUrls || [],
        tags: pet.tags || [],
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center z-9999">
      <div className="bg-white rounded-lg  max-w-md w-full  shadow-xl">
        <div className="border-b border-amber-200 p-4">
          <h4 className="text-xl font-bold">{pet.name}</h4>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-900 mb-1">Pet Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:outline-amber-500 focus:border-none"
                required
              />
            </div>

            <div>
              <label className="text-gray-900 mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:outline-amber-500 focus:border-none"
                required
              />
            </div>
            <div>
              <label htmlFor="tags" className="text-gray-900 mb-1">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:outline-amber-500 focus:border-none"
              />
            </div>
            <div>
              <label className="text-gray-900 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:outline-amber-500 focus:border-none"
              >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </div>
          {updatePetMutation.error && (
            <div className="text-red-600 text-sm">
              Error: {updatePetMutation.error.message}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={updatePetMutation.isPending}
              className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none "
            >
              Cancel
            </button>
            <button
              data-testid="update-pet-button"
              type="submit"
              disabled={updatePetMutation.isPending}
              className="flex-1 bg-amber-500/90 text-white py-2 px-4 rounded-md hover:bg-amber-400 focus:outline-none"
            >
              {updatePetMutation.isPending ? "Updating..." : "Update Pet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
