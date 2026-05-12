import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { colors } from "../../styles/designSystem";

function InputField({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  verifyButton = false,
  verified = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2">

      {/* LABEL */}
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      {/* INPUT WRAPPER */}
      <div className="relative">

        {/* LEFT ICON */}
        {Icon && (
          <Icon
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        )}

        {/* INPUT */}
        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className={`
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-200

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100

            ${Icon ? "pl-11" : "pl-4"}
            ${isPassword || verifyButton ? "pr-28" : "pr-4"}
          `}
        />

        {/* PASSWORD TOGGLE */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-slate-600
              transition
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}

        {/* VERIFY BUTTON */}
        {verifyButton && !isPassword && (
          <button
            type="button"
            className={`
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              px-3
              py-1.5
              rounded-lg
              text-xs
              font-medium
              transition-all
              duration-200

              ${
                verified
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }
            `}
          >
            {verified ? "Verified" : "Verify"}
          </button>
        )}

      </div>
    </div>
  );
}

export default InputField;