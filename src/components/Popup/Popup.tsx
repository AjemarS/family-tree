import React, { useEffect } from "react";
import "./Popup.css";

interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children, isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      // Add event listener for the "Esc" key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div>
      {/* Using ternary operator for toggling among popup content and incoming children (always Stage) */}
      {isOpen ? (
        <div className="popup-overlay" role="dialog" aria-modal="true" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={onClose} aria-label="Close popup">
              &times;
            </button>
            {content}
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Popup;
