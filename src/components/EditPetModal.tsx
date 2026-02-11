import { useState } from "react";
import { useUpdatePet } from "../hooks/useUpdatePet";
import type { Pet } from "../types/petStatus";

type EditPetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pet: Pet;
};

interface PetFormData {
  id: number;
  name: string;
  category: string;
  status: string;
}

export const EditPetModal = ({ isOpen, onClose, pet }: EditPetModalProps) => {
  const updatePetMutation = useUpdatePet();

  const [formData, setFormData] = useState<PetFormData>({
    id: pet.id,
    name: pet.name || "",
    category: pet.category?.name || "",
    status: pet.status || "available",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPet = {
      ...pet,
      name: formData.name,
      category: {
        id: pet.category?.id || 0,
        name: formData.category,
      },
      status: formData.status,
    };

    try {
      await updatePetMutation.mutateAsync(updatedPet);
      onClose();
    } catch (error) {
      console.error("Failed to update pet:", error);
    }
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
    <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h4 className="text-xl font-bold">Edit Pet: {pet.name}</h4>
          <button
            onClick={onClose}
            className="hover:text-gray-700"
            disabled={updatePetMutation.isPending}
          >
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8L8 16M8.00001 8L16 16"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pet Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>

          {updatePetMutation.error && (
            <div className="text-red-600 text-sm">
              Error: {updatePetMutation.error.message}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={updatePetMutation.isPending}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {updatePetMutation.isPending ? "Updating..." : "Update Pet"}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={updatePetMutation.isPending}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
