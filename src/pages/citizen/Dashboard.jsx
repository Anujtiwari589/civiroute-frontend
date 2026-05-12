import DashboardLayout from "../../layouts/DashboardLayout";

import {
  FileText,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Plus,
  MessageCircle,
} from "lucide-react";

import StatsCardSkeleton from "../../components/ui/StatsCardSkeleton";

function Dashboard() {

  const stats = [
    { title: "Total Complaints", value: "24", icon: FileText },
    { title: "Pending", value: "08", icon: Clock3 },
    { title: "Resolved", value: "14", icon: CheckCircle2 },
    { title: "Urgent", value: "02", icon: AlertTriangle },
  ];

  const complaints = [
    { title: "Water Leakage Near Market", status: "Pending", date: "2 hours ago" },
    { title: "Street Light Not Working", status: "Resolved", date: "Yesterday" },
    { title: "Garbage Collection Delay", status: "In Review", date: "2 days ago" },
  ];

  const loading = false; // (FIX: missing variable issue)

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* HERO */}
        <div className="
          bg-white
          border border-slate-200
          rounded-3xl
          p-6 md:p-8
          shadow-sm
        ">

          <div className="
            flex flex-col lg:flex-row
            lg:items-center lg:justify-between
            gap-6
          ">

            <div>

              <p className="text-blue-600 font-medium">
                Welcome Back 👋
              </p>

              <h1 className="
                mt-2
                text-3xl md:text-4xl
                font-bold text-slate-900
              ">
                Smart Civic Complaint Platform
              </h1>

              <p className="mt-4 text-slate-500 max-w-2xl">
                Track complaints, monitor progress, and connect with departments in a clean civic-tech system.
              </p>

            </div>

            <button className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              rounded-2xl
              px-5 py-4
              font-medium
              flex items-center gap-2
              transition
              shadow-sm
            ">
              <Plus size={20} />
              Create Complaint
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
          gap-5
        ">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-slate-200
                  rounded-3xl
                  p-6
                  shadow-sm
                "
              >

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-slate-500 text-sm">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                      {item.value}
                    </h2>
                  </div>

                  <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex items-center justify-center
                  ">
                    <Icon size={24} />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM GRID */}
        <div className="
          grid grid-cols-1 xl:grid-cols-3
          gap-6
        ">

          {/* QUICK ACTIONS */}
          <div className="
            bg-white
            border border-slate-200
            rounded-3xl
            p-6
            shadow-sm
          ">

            <h2 className="text-xl font-bold text-slate-900">
              Quick Actions
            </h2>

            <div className="mt-5 flex flex-col gap-4">

              <button className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-left transition">
                Create New Complaint
              </button>

              <button className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-left transition">
                Track Complaint Status
              </button>

              <button className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 text-left transition">
                Update Profile
              </button>

            </div>

          </div>

          {/* RECENT COMPLAINTS */}
          <div className="
            xl:col-span-2
            bg-white
            border border-slate-200
            rounded-3xl
            p-6
            shadow-sm
          ">

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-bold text-slate-900">
                Recent Complaints
              </h2>

              <button className="text-blue-600 font-medium">
                View All
              </button>

            </div>

            <div className="mt-6 flex flex-col gap-4">

              {complaints.map((item, index) => (
                <div
                  key={index}
                  className="
                    border border-slate-200
                    rounded-2xl
                    p-5
                    flex flex-col md:flex-row
                    md:items-center md:justify-between
                    gap-3
                  "
                >

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {item.date}
                    </p>
                  </div>

                  <span className={`
                    px-4 py-2
                    rounded-full
                    text-sm font-medium
                    ${getStatusStyle(item.status)}
                  `}>
                    {item.status}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CHATBOT */}
        <button className="
          fixed bottom-6 right-6
          w-16 h-16
          rounded-full
          bg-blue-600 hover:bg-blue-700
          text-white
          shadow-lg
          flex items-center justify-center
          transition
        ">
          <MessageCircle size={26} />
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;