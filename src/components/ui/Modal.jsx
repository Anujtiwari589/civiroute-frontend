import { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {
  // ESC key close support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        flex items-center justify-center
        z-50
        p-4
      "
      onClick={onClose} // click outside closes modal
    >

      {/* MODAL BOX */}
      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          w-full
          max-w-md
          p-6
          animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()} // prevent close on inside click
      >

        {/* HEADER (optional) */}
        {title && (
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {title}
          </h2>
        )}

        {/* CONTENT */}
        <div>
          {children}
        </div>

        {/* ACTIONS */}
        <button
          onClick={onClose}
          className="
            mt-6
            w-full
            py-3
            rounded-xl
            border border-slate-200
            text-slate-700
            font-medium
            hover:bg-slate-50
            transition
          "
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default Modal;