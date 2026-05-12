import { AlertTriangle } from "lucide-react";

function ErrorState({
  title = "Something went wrong",
  description = "Please try again later.",
  onRetry,
  showDetails = false,
}) {
  return (
    <div className="
      flex flex-col items-center justify-center
      text-center
      py-16 px-6
    ">

      {/* ICON */}
      <div className="
        w-16 h-16
        rounded-2xl
        bg-red-50
        text-red-600
        flex items-center justify-center
      ">
        <AlertTriangle size={28} />
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

      {/* ACTIONS */}
      <div className="mt-6 flex gap-3">

        {/* RETRY BUTTON */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="
              px-5 py-3
              rounded-xl
              bg-red-600
              text-white
              font-medium
              hover:bg-red-700
              transition-all duration-200
              shadow-sm
            "
          >
            Retry
          </button>
        )}

        {/* SECONDARY REFRESH OPTION (optional UX upgrade) */}
        <button
          onClick={() => window.location.reload()}
          className="
            px-5 py-3
            rounded-xl
            border border-slate-200
            text-slate-700
            font-medium
            hover:bg-slate-50
            transition
          "
        >
          Refresh
        </button>

      </div>

      {/* OPTIONAL DEBUG INFO */}
      {showDetails && (
        <p className="
          mt-4 text-xs text-slate-400
        ">
          If the issue persists, check network or server status.
        </p>
      )}

    </div>
  );
}

export default ErrorState;