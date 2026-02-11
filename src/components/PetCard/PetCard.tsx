import animalLogo1 from "../../assets/animalLogo1.svg";
import trash from "../../assets/trash.svg";

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
    <div className="bg-gray-50 rounded-md border shadow-lg h-83 w-85 relative">
      <div className="flex flex-col gap-2">
        <div className="flex gap-8 p-4">
          <img src={animalLogo1} alt="Animal Logo" className="h-35 w-35" />
        </div>
        <img
          src={trash}
          alt="Trash Icon"
          className="h-6 w-6 absolute right-2 top-2"
        />
        <div className="border border-amber-500/20 mx-4 border-0.5" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">{name}</h4>
          <div className="border border-green-600 w-20 rounded-md bg-green-300/50 text-green-700 flex justify-center text-sm">
            {status}
          </div>
        </div>
        <div />
        <p className="text-gray-800 text-sm">{description}</p>
        <div className="text-sm font-semibold flex gap-1 mb-2">
          Category:<p className="font-normal">{category}</p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={viewClick}
            className="py-1 bg-amber-500/90 text-white rounded-xl hover:bg-amber-400 w-18 border border-amber-400"
          >
            View
          </button>
          <button
            onClick={editClick}
            className="py-1 bg-cyan-500/90 text-white  hover:bg-cyan-400 w-18 rounded-xl border border-cyan-400"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
