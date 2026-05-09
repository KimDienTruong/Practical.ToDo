import React, { useEffect } from "react";

type ModalProps = {
  title: string;

  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const FormModal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed text-black inset-0 h-full flex items-center justify-center z-50 cursor-auto">
      <div className=" rounded-lg flex flex-col p-6 z-10 w-full max-w-md bg-white h-max">
        <div className="flex justify-center">
          <h2 className="text-black text-xl font-bold mb-4 text-center ">
            {title}
          </h2>
        </div>
        {children}
        <div className="flex flex-row-reverse w-full border-gray-300 border-t">
          <button
            className="bg-blue-500 mt-2 w-20 h-8 text-white rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
