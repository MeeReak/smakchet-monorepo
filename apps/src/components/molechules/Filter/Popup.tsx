import {Icon} from "@/components";
import React from "react";

interface PopupProps {
  setModalState: (state: boolean) => void
 
  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children, setModalState,  }) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
      {/* Background overlay */}
      <div className="fixed inset-0"></div>

      {/* Modal content */}
      <div className="bg-white border-2 border-gray-200 rounded-xl w-full max-w-sm sm:max-w-md p-5 relative">
        {/* Close button */}
        <div
          onClick={() => setModalState(false)}
          className="cursor-pointer absolute top-2 right-2"
        >
          <Icon label="close" size="lg" />
        </div>
        {/* Render children */}
        {children}
      </div>
    </div>
  );
};

export default Popup;
