import { colors } from "../../styles/designSystem";

function Button({
  children,
  loading = false,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles = `
    h-12
    px-5
    rounded-xl
    font-medium
    transition-all
    duration-200
    flex
    items-center
    justify-center
    gap-2
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      hover:bg-blue-700
    `,
    secondary: `
      bg-white
      text-slate-900
      border
      border-slate-200
      hover:bg-slate-100
    `,
    danger: `
      bg-red-500
      text-white
      hover:bg-red-600
    `,
    ghost: `
      bg-transparent
      text-slate-700
      hover:bg-slate-100
    `,
  };

  return (
    <button
      disabled={loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;