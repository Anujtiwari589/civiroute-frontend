function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">

      <div className="w-full max-w-xl">

        {/* Logo + Heading */}
        <div className="text-center mb-8">

          <div className="
            w-14
            h-14
            bg-blue-600
            rounded-2xl
            mx-auto
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            shadow-card
          ">
            S
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>

        </div>

        {/* Card */}
        <div className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          shadow-card
          p-6
          md:p-8
        ">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;