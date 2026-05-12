import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Building2,
  Users,
  FileText,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

function SuperAdminDashboard() {

  const stats = [
    {
      title: "Total Departments",
      value: "18",
      icon: Building2,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Total Officers",
      value: "264",
      icon: Users,
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },
    {
      title: "Total Complaints",
      value: "14,280",
      icon: FileText,
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      title: "Critical Issues",
      value: "48",
      icon: AlertTriangle,
      bg: "bg-red-50",
      text: "text-red-600",
    },
  ];

  const departments = [
    {
      name: "Water Department",
      complaints: "1,248",
      officers: "32",
      status: "Active",
    },
    {
      name: "Electricity Department",
      complaints: "964",
      officers: "24",
      status: "Active",
    },
    {
      name: "Road Maintenance",
      complaints: "1,812",
      officers: "40",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout>

      <div className="
        max-w-7xl
        mx-auto
        space-y-6
      ">

        {/* Header */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        ">

          <div>

            <h1 className="
              text-3xl
              font-bold
              text-slate-900
            ">
              Super Admin Dashboard
            </h1>

            <p className="
              mt-2
              text-slate-500
            ">
              Centralized platform management and analytics
            </p>

          </div>

          {/* Platform Health */}
          <div className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            px-6
            py-5
            shadow-card
            flex
            items-center
            gap-4
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-green-50
              text-green-600
              flex
              items-center
              justify-center
            ">

              <ShieldCheck size={26} />

            </div>

            <div>

              <p className="
                text-sm
                text-slate-500
              ">
                Platform Health
              </p>

              <h2 className="
                mt-1
                text-2xl
                font-bold
                text-slate-900
              ">
                Stable
              </h2>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        ">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-6
                  shadow-card
                "
              >

                <div className="
                  flex
                  items-center
                  justify-between
                ">

                  <div>

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      {item.title}
                    </p>

                    <h2 className="
                      mt-3
                      text-3xl
                      font-bold
                      text-slate-900
                    ">
                      {item.value}
                    </h2>

                  </div>

                  <div className={`
                    w-14
                    h-14
                    rounded-2xl

                    ${item.bg}
                    ${item.text}

                    flex
                    items-center
                    justify-center
                  `}>

                    <Icon size={26} />

                  </div>

                </div>

              </div>
            );

          })}

        </div>

        {/* Main Grid */}
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        ">

          {/* Departments */}
          <div className="
            xl:col-span-2

            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6 md:p-8
            shadow-card
          ">

            <div className="
              flex
              items-center
              justify-between
              gap-4
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-slate-900
                ">
                  Departments Overview
                </h2>

                <p className="
                  mt-1
                  text-slate-500
                ">
                  Monitor all departments and activities
                </p>

              </div>

              <button
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-medium
                  transition-all
                  duration-200
                "
              >
                Add Department
              </button>

            </div>

            {/* Table */}
            <div className="
              mt-8
              overflow-x-auto
            ">

              <table className="
                w-full
                min-w-[700px]
              ">

                <thead>

                  <tr className="
                    border-b
                    border-slate-200
                  ">

                    <th className="
                      text-left
                      pb-4
                      text-sm
                      font-semibold
                      text-slate-500
                    ">
                      Department
                    </th>

                    <th className="
                      text-left
                      pb-4
                      text-sm
                      font-semibold
                      text-slate-500
                    ">
                      Complaints
                    </th>

                    <th className="
                      text-left
                      pb-4
                      text-sm
                      font-semibold
                      text-slate-500
                    ">
                      Officers
                    </th>

                    <th className="
                      text-left
                      pb-4
                      text-sm
                      font-semibold
                      text-slate-500
                    ">
                      Status
                    </th>

                    <th className="
                      text-right
                      pb-4
                      text-sm
                      font-semibold
                      text-slate-500
                    ">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {departments.map((item, index) => (

                    <tr
                      key={index}
                      className="
                        border-b
                        border-slate-100
                      "
                    >

                      <td className="
                        py-5
                        font-semibold
                        text-slate-900
                      ">
                        {item.name}
                      </td>

                      <td className="
                        py-5
                        text-slate-700
                      ">
                        {item.complaints}
                      </td>

                      <td className="
                        py-5
                        text-slate-700
                      ">
                        {item.officers}
                      </td>

                      <td className="py-5">

                        <span className="
                          px-3
                          py-1.5
                          rounded-xl
                          text-sm
                          font-medium
                          bg-green-100
                          text-green-700
                        ">

                          {item.status}

                        </span>

                      </td>

                      <td className="
                        py-5
                        text-right
                      ">

                        <button
                          className="
                            text-blue-600
                            font-medium
                          "
                        >
                          Manage
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* Activity */}
          <div className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            shadow-card
          ">

            <div className="
              flex
              items-center
              justify-between
            ">

              <h2 className="
                text-2xl
                font-bold
                text-slate-900
              ">
                Platform Activity
              </h2>

              <TrendingUp
                className="text-blue-600"
                size={22}
              />

            </div>

            <div className="
              mt-8
              flex
              flex-col
              gap-6
            ">

              {[1,2,3,4].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    shrink-0
                  ">

                    <Building2 size={20} />

                  </div>

                  <div>

                    <h3 className="
                      font-semibold
                      text-slate-900
                    ">
                      Department Updated
                    </h3>

                    <p className="
                      mt-1
                      text-sm
                      text-slate-500
                      leading-6
                    ">
                      Water Department performance
                      metrics were updated.
                    </p>

                    <p className="
                      mt-2
                      text-xs
                      text-slate-400
                    ">
                      30 minutes ago
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default SuperAdminDashboard;