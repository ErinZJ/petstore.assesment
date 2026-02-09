type NewPetFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewPetForm = ({ isOpen, onClose }: NewPetFormProps) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
          <h2>Create New Pet</h2>
          <form>
            <label htmlFor="name" className="flex flex-col">
              Name
              <input
                className="border p-1 rounded"
                type="text"
                id="name"
                name="name"
                required
              />
            </label>

            <label htmlFor="category" className="flex flex-col">
              Category:
              <input
                type="text"
                id="category"
                name="category"
                required
                className="border p-1 rounded"
              />
            </label>

            <div>
              <label htmlFor="status" className="flex justify-between">
                Status:
                <select id="status" name="status" required>
                  <option value="available">Available</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Sold</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end gap-4">
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
