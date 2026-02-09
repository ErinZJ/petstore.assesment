import { useState } from "react";
import { NewPetButton } from "./NewPetButton";
import { NewPetForm } from "./NewPetForm";

export const NewPet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NewPetButton onClick={handleOpen} />
      <NewPetForm isOpen={isOpen} onClose={handleClose} />
    </>
  );
};
