import { useState } from "react";
import { useAddNewPet } from "../../hooks/useAddNewPet";

type NewPetFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewPetForm = ({ isOpen, onClose }: NewPetFormProps) => {
  const { mutate, isPending } = useAddNewPet();

  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    status: "available" as "available" | "pending" | "sold",
    category: "",
    tags: "",
    photoUrls: [],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      id: formData.id,
      name: formData.name,
      status: formData.status,
      category: {
        id: 1,
        name: formData.category,
      },
      photoUrls: formData.photoUrls,

      tags: formData.tags
        ? [
            {
              id: 1,
              name: formData.tags,
            },
          ]
        : [],
    });

    // Reset form
    setFormData({
      id: formData.id,
      name: "",
      status: "available",
      category: "",
      tags: "",
      photoUrls: [],
    });

    onClose();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl">
        <div className="border-b border-amber-200 p-4">
          <h4 className="text-xl font-bold">Add New Pet</h4>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Pet Name *
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter pet name"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Category *
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                placeholder="e.g. Dogs, Cats, Birds"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g. friendly, playful, trained"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="photoUrls"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Photo URLs
              </label>
              <input
                type="text"
                id="photoUrls"
                name="photoUrls"
                value={formData.photoUrls}
                onChange={handleChange}
                placeholder="https://example.com/photo1.jpg, https://example.com/photo2.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate multiple URLs with commas
              </p>
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                required
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-amber-500/90 text-white py-2 px-4 rounded-md hover:bg-amber-400 focus:outline-none"
              >
                {isPending ? "Updating..." : "Update Pet"}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isPending}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none "
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
