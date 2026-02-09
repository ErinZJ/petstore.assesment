type PetProps = {
  id: number;
  name: string;
  description: string;
  status: string;
  category: string;
  viewClick: () => void;
  editClick: () => void;
};

export const PetCard = ({
  name,
  description,
  status,
  category,
  viewClick,
  editClick,
}: PetProps) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <img src="https://via.placeholder.com/150" alt="Pet" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <div>Category: {category}</div>
      <div>Status: {status}</div>
      <div className="flex gap-4 mt-2">
        <button
          onClick={viewClick}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View
        </button>
        <button
          onClick={editClick}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
