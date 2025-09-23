import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PlatformSelectionModal = ({ isOpen, onClose, children }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-[98vw] sm:max-w-[90vw] lg:max-w-[60vw] max-h-[95vh] sm:max-h-none relative"
      >
        <button
          className="text-lg absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-500 hover:text-gray-700 z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="overflow-y-auto max-h-[calc(95vh-3rem)] sm:overflow-visible sm:max-h-none">
          {children}
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document.body level
  return typeof document !== "undefined" 
    ? createPortal(modalContent, document.body)
    : null;
};

export default PlatformSelectionModal;
