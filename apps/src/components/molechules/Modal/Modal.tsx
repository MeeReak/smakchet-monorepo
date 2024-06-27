import React, { ReactNode } from "react";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";

interface ModalProp {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  classname?:string;
}

const ModalButton: React.FC<ModalProp> = ({ children, isOpen, onClose , classname}) => {
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent className={`${classname}`}>
        {(onClose) => (
          <>
            <ModalBody>
              {children}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalButton;
