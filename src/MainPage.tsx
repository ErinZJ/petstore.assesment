import { PetCards } from "./components/PetCard/PetCards";
export const MainPage = () => {
  return (
    <div className="bg-gray-100/70 mt-40">
      <div className="p-4 flex flex-col gap-4">
        <PetCards />
      </div>
    </div>
  );
};
