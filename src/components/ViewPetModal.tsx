type ViewPetModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  name: string;
  description: string;
  status: string;
  category: string;
};

export const ViewPetModal = ({
  isOpen = false,
  onClose,
  name,
  description,
  status,
  category,
}: ViewPetModalProps) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-600/90 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h4 className="text-xl font-bold">{name}</h4>
            <button onClick={handleClose} className="hover:text-gray-700 ">
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
          <img
            src="https://via.placeholder.com/400x300"
            alt={name}
            className="w-full rounded-lg mb-4"
          />
          <p className="text-gray-600 mt-1">{description}</p>
          <p className="text-gray-600 mt-1">{category}</p>
          <p className="text-gray-600 mt-1 capitalize">{status}</p>
        </div>
      </div>
    )
  );
};
