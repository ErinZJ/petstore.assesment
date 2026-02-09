type NewPetFormProps = {
  isOpen: boolean;
  // onClose: () => void;
};

export const NewPetForm = ({ isOpen }: NewPetFormProps) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <h2>Create New Pet</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" required />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" required>
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
            </select>
          </div>
          <button type="submit">Create Pet</button>
        </form>
      </div>
    )
  );
};
