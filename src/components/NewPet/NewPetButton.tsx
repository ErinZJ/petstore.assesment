type NewPetButtonProps = {
  onClick: () => void;
};

export const NewPetButton = ({ onClick }: NewPetButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Add New Pet
    </button>
  );
};
