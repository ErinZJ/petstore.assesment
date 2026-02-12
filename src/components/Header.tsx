import animalLogo1 from "../assets/animalLogo1.svg";
import animalShelter from "../assets/animalShelter.svg";

export const Header = () => {
  return (
    <div
      className="items-center flex flex-col py-4 shadow-md fixed w-full top-0 bg-white"
      style={{
        backgroundImage:
          "linear-gradient(0deg,rgba(255, 255, 255, 0.85) 36%, rgba(255, 149, 0, 0.7) 100%)",
      }}
    >
      <div className="flex justify-center items-center gap-4">
        <img src={animalLogo1} alt="Animal Logo" className="h-12 w-12 mb-4" />
        <h1 className="font-bold text-4xl font-serif text-gray-900">
          PawSync
        </h1>{" "}
        <img src={animalShelter} alt="Animal Logo" className="h-12 w-12 mb-4" />
      </div>
      <p className="text-center font-serif font-bold text-gray-900 text-xl">
        Welcome to the Pet Store Management System
      </p>
    </div>
  );
};
