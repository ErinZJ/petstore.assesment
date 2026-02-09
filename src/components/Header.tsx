import animalLogo1 from "../assets/animalLogo1.svg";
import animalLogo2 from "../assets/animalLogo2.svg";
import animalShelter from "../assets/animalShelter.svg";

export const Header = () => {
  return (
    <div
      className="items-center flex flex-col p-4 shadow-2xl"
      style={{
        background:
          "linear-gradient(0deg,rgba(156, 34, 34, 0.85) 0%, rgba(253, 187, 45, 1) 100%)",
      }}
    >
      <div className="flex justify-center">
        <img src={animalLogo1} alt="Animal Logo" className="h-12 w-12 mb-4" />
        <img src={animalLogo2} alt="Animal Logo" className="h-12 w-12 mb-4" />
        <img src={animalShelter} alt="Animal Logo" className="h-12 w-12 mb-4" />
      </div>
      <h1 className="font-bold text-4xl font-serif text-gray-900">PawSync</h1>
      <p className="text-center font-serif font-bold text-gray-900 text-xl">
        Welcome to the Pet Store Management System
      </p>
    </div>
  );
};
