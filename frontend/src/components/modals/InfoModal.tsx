import React from "react";
import { createPortal } from "react-dom";

type InfoModalProps = {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const InfoModal = ({ title, message, isOpen, onClose }: InfoModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed text-black inset-0 h-full flex items-center justify-center z-50 cursor-auto">
      <div className=" rounded-lg flex flex-col border px-6 pt-2 pb-6 z-10 w-full max-w-md bg-white h-max">
        <div className="flex flex-row-reverse top-4 right-4 z-20 ">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-offset-1 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <h2 className="text-black text-xl font-bold mb-4 text-center ">
            {title}
          </h2>
        </div>
        <div>{message}</div>
        <div className="flex flex-row-reverse w-full border-gray-300 border-t">
          <button
            className="bg-blue-500 mt-2 w-20 h-8 text-white rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-portal") as HTMLElement,
  );
};

export default InfoModal;
