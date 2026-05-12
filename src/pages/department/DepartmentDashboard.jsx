import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

function DepartmentDashboard() {

  const stats = [
    {
      title: "Total Complaints",
      value: "1,248",
      icon: FileText,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Pending Cases",
      value: "142",
      icon: Clock3,
      bg: "bg-yellow-50",
      text: "text-yellow-600",
    },
    {
      title: "Resolved Issues",
      value: "980",
      icon: CheckCircle2,
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      title: "High Priority",
      value: "32",
      icon: AlertTriangle,
      bg: "bg-red-50",
      text: "text-red-600",
    },
  ];

  const complaints = [
    {
      id: "#CMP1024",
      title: "Water Leakage Near Market",
      status: "Pending",
      priority: "High",
    },
    {
      id: "#CMP1025",
      title: "Street Light Not Working",
      status: "In Review",
      priority: "Medium",
    },
    {
      id: "#CMP1026",
      title: "Garbage Collection Delay",
      status: "Resolved",
      priority: "Low",
    },
  ];

  const getPriority = (p) => {
    if (p === "High") return "bg-red-100 text-red-700";
    if (p === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const getStatus = (s) => {
    if (s === "Resolved") return "bg-green-100 text-green-700";
    if (s === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Department Dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Monitor and manage civic complaints efficiently
            </p>
          </div>

          <div className="
            bg-white border border-slate-200
            rounded-3xl px-6 py-5
            shadow-sm flex items-center gap-4
          ">

            <div className="
              w-12 h-12 rounded-2xl
              bg-green-50 text-green-600
              flex items-center justify-center
            ">
              <TrendingUp size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Resolution Rate
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                92%
              </h2>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  bg-white border border-slate-200
                  rounded-3xl p-6 shadow-sm
                  hover:shadow-md transition
                "
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`
                    w-12 h-12 rounded-2xl
                    ${item.bg} ${item.text}
                    flex items-center justify-center
                  `}>
                    <Icon size={22} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* TABLE */}
          <div className="
            xl:col-span-2
            bg-white border border-slate-200
            rounded-3xl p-6 shadow-sm
          ">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Assigned Complaints
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Active complaint queue
                </p>
              </div>

              <button className="
                bg-blue-600 hover:bg-blue-700
                text-white px-5 py-2.5
                rounded-2xl text-sm font-medium
                transition
              ">
                View All
              </button>

            </div>

            <div className="mt-6 overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead>
                  <tr className="border-b border-slate-200">

                    <th className="text-left py-4 text-sm text-slate-500">
                      ID
                    </th>
                    <th className="text-left py-4 text-sm text-slate-500">
                      Issue
                    </th>
                    <th className="text-left py-4 text-sm text-slate-500">
                      Priority
                    </th>
                    <th className="text-left py-4 text-sm text-slate-500">
                      Status
                    </th>
                    <th className="text-right py-4 text-sm text-slate-500">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {complaints.map((c, i) => (
                    <tr
                      key={i}
                      className="
                        border-b border-slate-100
                        hover:bg-slate-50 transition
                      "
                    >

                      <td className="py-4 font-medium text-slate-900">
                        {c.id}
                      </td>

                      <td className="py-4 text-slate-700">
                        {c.title}
                      </td>

                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-xl text-sm font-medium ${getPriority(c.priority)}`}>
                          {c.priority}
                        </span>
                      </td>

                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-xl text-sm font-medium ${getStatus(c.status)}`}>
                          {c.status}
                        </span>
                      </td>

                      <td className="py-4 text-right">
                        <button className="text-blue-600 font-medium hover:underline">
                          Open
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="
            bg-white border border-slate-200
            rounded-3xl p-6 shadow-sm
          ">

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-6">

              {[1,2,3].map((i) => (
                <div key={i} className="flex gap-3">

                  <div className="
                    w-10 h-10 rounded-2xl
                    bg-blue-50 text-blue-600
                    flex items-center justify-center
                  ">
                    <FileText size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-slate-900">
                      Complaint Updated
                    </p>
                    <p className="text-sm text-slate-500">
                      Moved to inspection stage
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      1 hour ago
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

export default DepartmentDashboard;