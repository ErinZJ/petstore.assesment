type NewPetButtonProps = {
  onClick: () => void;
};

export const NewPetButton = ({ onClick }: NewPetButtonProps) => {
  return (
    <button
      data-testid="add-new-pet-button"
      type="button"
      className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-xl"
      onClick={onClick}
    >
      Add New Pet
    </button>
  );
};
