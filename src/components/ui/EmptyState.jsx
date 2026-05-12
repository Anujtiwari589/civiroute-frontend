import { Inbox } from "lucide-react";

function EmptyState({
  title = "No Data Found",
  description = "There is nothing to show here right now.",
  actionText = "",
  onAction,
}) {
  return (
    <div className="
      flex flex-col items-center justify-center
      text-center
      py-16 px-6
    ">

      {/* ICON WRAPPER */}
      <div className="
        w-16 h-16
        rounded-2xl
        bg-slate-100
        flex items-center justify-center
        text-slate-500
      ">
        <Inbox size={28} />
      </div>

      {/* TITLE */}
      <h2 className="
        mt-5
        text-xl font-semibold
        text-slate-900
      ">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="
        mt-2
        text-sm text-slate-500
        max-w-md
        leading-relaxed
      ">
        {description}
      </p>

      {/* ACTION BUTTON */}
      {actionText && (
        <button
          onClick={onAction}
          className="
            mt-6
            px-5 py-3
            rounded-xl
            bg-blue-600
            text-white
            font-medium
            hover:bg-blue-700
            transition-all duration-200
            shadow-sm
          "
        >
          {actionText}
        </button>
      )}

    </div>
  );
}

export default EmptyState;