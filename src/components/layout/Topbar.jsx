import { Bell, Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

function Topbar({ setSidebarOpen }) {
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/complaints": "Complaints",
    "/create-complaint": "Create Complaint",
    "/complaint-details": "Complaint Details",
  };

  return (
    <header className="
      h-20
      bg-white
      border-b border-slate-200
      px-4 md:px-6
      flex items-center justify-between
      gap-4
    ">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 flex-1">

        {/* MOBILE MENU */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            md:hidden
            w-11 h-11
            rounded-xl
            border border-slate-200
            flex items-center justify-center
            text-slate-700
            hover:bg-slate-50
            transition
          "
        >
          <Menu size={20} />
        </button>

        {/* TITLE BLOCK */}
        <div>
          <h1 className="
            text-2xl font-bold
            text-slate-900
          ">
            {titles[location.pathname] || "Smart Civic"}
          </h1>

          <p className="
            text-sm text-slate-500
            mt-1
          ">
            Modern civic-tech management system
          </p>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div className="
          hidden lg:flex
          items-center gap-3
          bg-slate-100
          rounded-2xl
          px-4 h-11
          w-72
          focus-within:ring-4
          focus-within:ring-blue-100
          transition
        ">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              bg-transparent
              flex-1
              outline-none
              text-sm text-slate-700
              placeholder:text-slate-400
            "
          />

        </div>

        {/* NOTIFICATION */}
        <button
          className="
            relative
            w-11 h-11
            rounded-xl
            border border-slate-200
            flex items-center justify-center
            text-slate-600
            hover:bg-slate-50
            transition
          "
        >

          <Bell size={20} />

          {/* DOT */}
          <span className="
            absolute top-2 right-2
            w-2 h-2
            rounded-full
            bg-red-500
          " />

        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">

          <div className="hidden md:block text-right">

            <p className="text-sm font-semibold text-slate-900">
              Anuj
            </p>

            <p className="text-xs text-slate-500">
              Citizen User
            </p>

          </div>

          <div className="
            w-11 h-11
            rounded-full
            bg-blue-600
            text-white
            flex items-center justify-center
            font-semibold
          ">
            A
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;