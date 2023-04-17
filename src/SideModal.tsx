import React from "react";

interface SideModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const SideModal: React.FC<SideModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 w-300 bg-white z-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sm:w-full sm:max-w-md`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold underline">Modal Content</h2>
        <p className="mt-2">This is the content of the modal.</p>
        <button
          className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SideModal;
