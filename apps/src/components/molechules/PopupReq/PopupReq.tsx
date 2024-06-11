import React, { Dispatch, SetStateAction } from "react";
import { RequireDetail } from "../ReqCardDetail/RequireDetail";
import { Requirement } from "@/@types/card";

const PopupReq = ({
  setVisible = () => {},
  requirement,
}: {
  setVisible?: Dispatch<SetStateAction<boolean>>;
  requirement: Requirement;
}) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-filter bg-black/50 flex justify-center items-center">
      {/* Background overlay */}

      {/* Modal content */}
      <div>
        <RequireDetail requirement={requirement} setIsvisible={setVisible} />
      </div>
    </div>
  );
};

export default PopupReq;
