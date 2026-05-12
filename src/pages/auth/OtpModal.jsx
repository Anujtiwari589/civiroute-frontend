import { X } from "lucide-react";

function OtpModal({
  title,
  subtitle,
  onClose,
}) {

  return (
    <div className="
      fixed
      inset-0
      bg-black/30
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
      z-50
    ">

      <div className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-xl
        p-6
      ">

        {/* Top */}
        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-slate-500 mt-1 text-sm">
              {subtitle}
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-slate-600
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* OTP Inputs */}
        <div className="flex gap-3 mt-8 justify-center">

          {[1,2,3,4,5,6].map((item) => (

            <input
              key={item}
              type="text"
              maxLength={1}
              className="
                w-12
                h-14
                rounded-xl
                border
                border-slate-300
                text-center
                text-lg
                font-semibold
                outline-none
                transition-all
                duration-200
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            />

          ))}

        </div>

        {/* Timer */}
        <div className="mt-6 text-center">

          <p className="text-sm text-slate-500">
            Resend OTP in
            <span className="text-blue-600 font-medium ml-1">
              00:30
            </span>
          </p>

        </div>

        {/* Verify Button */}
        <button
          className="
            mt-6
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-xl
            py-3
            font-medium
            transition-all
            duration-200
          "
        >
          Verify OTP
        </button>

      </div>

    </div>
  );
}

export default OtpModal;