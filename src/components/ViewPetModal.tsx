import placeholderImg from "../assets/placeholder.jpg";

type ViewPetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  status: string;
  category: string;
  tag: string[];
};

export const ViewPetModal = ({
  isOpen = false,
  onClose,
  name,
  description,
  status,
  category,
  tag,
}: ViewPetModalProps) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center z-[9999]">
        <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-xl">
          <div className="border-b border-amber-200 p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold">{name}</h4>

              <button
                onClick={onClose}
                className="hover:text-gray-700 hover:bg-gray-100 rounded-full"
              >
                <svg
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8L8 16M8.00001 8L16 16"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <img
              src={placeholderImg}
              alt={name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-bold truncate pr-4">{name}</h4>
              <div className="border border-green-600 px-2 py-1 rounded-md bg-green-300/50 text-green-700 text-sm">
                {status}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3">{description}</p>

            <div className="text-sm font-semibold flex gap-1 mb-3">
              Category:{" "}
              <span className="font-normal text-gray-600">{category}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {tag.map((tagName) => (
                <div
                  key={tagName}
                  className="text-xs border border-amber-400 bg-amber-200 px-2 py-1 rounded-full text-amber-700"
                >
                  {tagName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
