import { useState, useEffect } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // Prevent background scroll when sidebar open (IMPORTANT UX FIX)
  useEffect(() => {
    if (mobileSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileSidebar]);

  return (
    <div className="
      min-h-screen
      bg-slate-50
      flex
    ">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MOBILE OVERLAY */}
      {mobileSidebar && (
        <div
          onClick={() => setMobileSidebar(false)}
          className="
            fixed inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
            lg:hidden
            transition-opacity
          "
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div className={`
        fixed top-0 left-0
        h-full w-72
        bg-white
        z-50
        shadow-xl
        transition-transform duration-300
        lg:hidden

        ${mobileSidebar ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 min-w-0">

        {/* MOBILE TOPBAR */}
        <div className="
          lg:hidden
          sticky top-0 z-30
          bg-white/90
          backdrop-blur-md
          border-b border-slate-200
          px-4 h-16
          flex items-center justify-between
        ">

          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileSidebar(true)}
              className="
                w-10 h-10
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

            <h2 className="text-lg font-bold text-slate-900">
              Civic Platform
            </h2>

          </div>

          {/* CLOSE BUTTON */}
          {mobileSidebar && (
            <button
              onClick={() => setMobileSidebar(false)}
              className="
                w-10 h-10
                rounded-xl
                border border-slate-200
                flex items-center justify-center
                text-slate-700
                hover:bg-slate-50
                transition
              "
            >
              <X size={20} />
            </button>
          )}

        </div>

        {/* DESKTOP TOPBAR */}
        <div className="hidden lg:block">
          <Topbar />
        </div>

        {/* PAGE CONTENT */}
        <main className="
          p-4 sm:p-6 lg:p-8
          max-w-[1600px]
          mx-auto
        ">
         <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;