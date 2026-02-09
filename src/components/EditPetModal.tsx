type EditPetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditPetModal = ({ isOpen, onClose }: EditPetModalProps) => {
  return (
    isOpen && (
      <>
        <div>
          <h4>Pet Name</h4> <button onClick={onClose}>Close</button>
        </div>
        <div>pet information goes here</div>
      </>
    )
  );
};
