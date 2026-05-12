import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  User,
  MessageCircle,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { getRole, logout } from "../../utils/auth";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const role = getRole();

  const menuByRole = {

      citizen: [
        {
          title: "Dashboard",
          path: "/citizen",
          icon: LayoutDashboard,
        },
        {
          title: "Complaints",
          path: "/citizen/complaints",
          icon: FileText,
        },
        {
          title: "Create Complaint",
          path: "/citizen/create",
          icon: PlusCircle,
        },
        {
          title: "Profile",
          path: "/citizen/profile",
          icon: User,
        },
        {
          title: "Help Bot",
          path: "/citizen/chatbot",
          icon: MessageCircle,
        },
      ],

  department: [
    {
      title: "Dashboard",
      path: "/department",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Complaints",
      path: "/department/complaints",
      icon: FileText,
    },
  ],

  admin: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Analytics",
      path: "/admin/analytics",
      icon: FileText,
    },
    {
      title: "Departments",
      path: "/admin/departments",
      icon: User,
    },
  ],
};

    const menuItems = menuByRole[role] || [];

  return (
    <>

      {/* MOBILE OVERLAY (FIXED BUG) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed inset-0
            bg-black/40
            z-40
            md:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static
          top-0 left-0
          z-50
          w-72
          min-h-screen
          bg-white
          border-r border-slate-200
          flex flex-col
          p-5
          transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="
              w-11 h-11
              rounded-2xl
              bg-blue-600
              text-white
              flex items-center justify-center
              font-bold text-lg
            ">
              S
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Smart Civic
              </h2>
              <p className="text-sm text-slate-500">
                Citizen Platform
              </p>
            </div>

          </div>

          {/* CLOSE BTN */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="
              md:hidden
              w-9 h-9
              rounded-xl
              border border-slate-200
              flex items-center justify-center
              text-slate-600
              hover:bg-slate-50
              transition
            "
          >
            <X size={18} />
          </button>

        </div>

        {/* NAVIGATION */}
        <nav className="mt-10 flex flex-col gap-2">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              location.pathname.startsWith(item.path)

            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3
                  px-4 py-3
                  rounded-2xl
                  transition-all duration-200

                  ${
                    isActive
                      ? `
                        bg-blue-600
                        text-white
                        shadow-sm
                      `
                      : `
                        text-slate-700
                        hover:bg-slate-100
                      `
                  }
                `}
              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </Link>
            );
          })}

        </nav>

      </aside>

    </>
  );
}

export default Sidebar;