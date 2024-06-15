import { Typography } from "@/components/atoms";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

interface DeleteProps {
  setModalState: (state: boolean) => void;
  id: string;
}
export const Delete: React.FC<DeleteProps> = ({ id, setModalState }) => {
  const { CardInfo, setCardInfo } = useContext(MyContext);
  const handleOnDelete = (id: string) => {
    const newCard = CardInfo.filter((card) => card.id !== id);
    console.log(newCard, "cardid");
    setCardInfo(newCard);
    setModalState(false); // Close the modal after deleting the item
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-[10px] shadow-xl xl:w-[395px] ">
        <Typography align="center" fontSize="h4" fontWeight="normal" >
          Are you sure ?
        </Typography>
        <Typography align="center" fontSize="h4" fontWeight="normal"  className="mb-5">
        This property will be deleted this event
        </Typography>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setModalState(false)}
            className="bg-gray-300 xl:w-[120px] text-gray-900 hover:bg-gray-400 py-3 px-6 rounded-lg font-medium transition-colors duration-200 ease-in-out"
            style={{ borderRadius: "10px", fontSize: "16px" }}
          >
            Cancel
          </button>
          <button
            onClick={() => handleOnDelete(id)}
            className="bg-red-600 xl:w-[120px] text-white hover:bg-red-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200 ease-in-out"
            style={{ borderRadius: "10px", fontSize: "16px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
