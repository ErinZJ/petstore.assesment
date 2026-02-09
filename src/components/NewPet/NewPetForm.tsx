import { useState } from "react";
import { useAddNewPet } from "../../hooks/useAddNewPet";
import animalLogo1 from "../../assets/animalLogo1.svg";

type NewPetFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewPetForm = ({ isOpen, onClose }: NewPetFormProps) => {
  const { mutate, isPending } = useAddNewPet();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    status: "available" as "available" | "pending" | "sold",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({
      name: formData.name,
      status: formData.status,
      category: {
        id: 0,
        name: formData.category,
      },
      photoUrls: [],
      tags: [],
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
    <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg w-125 h-162">
        <div className="border-b border-gray-50 shadow p-4 ">
          <h4 className="text-xl font-bold">New Pet Details</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-4 gap-4">
            <p>
              <img
                src={animalLogo1}
                alt="Animal Logo"
                className="h-24 w-24 mb-4"
              />
            </p>
            <label htmlFor="name" className="flex flex-col gap-2">
              Name
              <input
                className="border p-1 rounded border-gray-400"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="category" className="flex flex-col gap-2">
              Category
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="border p-1 rounded border-gray-400"
              />
            </label>
            <label htmlFor="category" className="flex flex-col gap-2">
              Tags
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="border p-1 rounded border-gray-400"
              />
            </label>
            <label htmlFor="status" className="flex flex-col gap-2">
              Status
              <select
                id="status"
                name="status"
                value={formData.status}
                required
                onChange={handleChange}
                className="border p-1.5 rounded border-gray-400"
              >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </label>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="border p-1.5 rounded border-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="border p-1.5 rounded-2xl border-gray-200 disabled:bg-gray-200 disabled:text-gray-400 bg-yellow-400"
              >
                {isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
