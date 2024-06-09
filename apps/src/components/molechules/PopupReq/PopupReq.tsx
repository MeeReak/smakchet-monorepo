import { Icon } from "@/components";
import React, { Dispatch, SetStateAction } from "react";
import { RequireDetail } from "../ReqCardDetail/RequireDetail";

interface PopupReqProps {
  children?: React.ReactNode;
  setVisible?: Dispatch<SetStateAction<boolean>> | undefined;
}

const PopupReq: React.FC<PopupReqProps> = ({ children , setVisible}) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-filter backdrop-blur-sm flex justify-center items-center">
      {/* Background overlay */}
      
 
      {/* Modal content */}
      <div>
        <RequireDetail setIsvisible={setVisible} />
      </div>
    </div>
  );
};

export default PopupReq;
