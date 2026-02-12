import { useState } from "react";
import { useDeletePet } from "../hooks/useDeletePet";
import type { Pet } from "../types/petStatus";

interface ConfirmDeleteModalProps {
  onClose: () => void;
  pet: Pet;
}

export const ConfirmDeleteModal = ({
  onClose,
  pet,
}: ConfirmDeleteModalProps) => {
  const deletePetMutation = useDeletePet();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleDelete = () => {
    setIsDeleting(true);
    deletePetMutation.mutate(pet.id, {
      onSuccess: () => {
        setIsDeleting(false);
        onClose();
      },
      onError: () => {
        setIsDeleting(false);
        setError("Failed to delete pet");
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl">
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
            Delete Pet
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-900">{pet.name}</span>
            <br />
            <span className="text-sm text-red-600">
              This action cannot be undone.
            </span>
          </p>
          {error && (
            <p className="text-red-600 text-center mb-6">
              Failed to delete pet
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isDeleting}
              className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex-1 px-4 py-2 text-white bg-red-600 border border-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
