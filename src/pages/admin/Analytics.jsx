import DashboardLayout from "../../layouts/DashboardLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {

  const complaintData = [
    { name: "Mon", complaints: 12 },
    { name: "Tue", complaints: 19 },
    { name: "Wed", complaints: 8 },
    { name: "Thu", complaints: 15 },
    { name: "Fri", complaints: 22 },
    { name: "Sat", complaints: 10 },
    { name: "Sun", complaints: 5 },
  ];

  const statusData = [
    { name: "Pending", value: 40 },
    { name: "Resolved", value: 45 },
    { name: "Rejected", value: 15 },
  ];

  const COLORS = ["#F59E0B", "#22C55E", "#EF4444"];

  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Analytics Dashboard
          </h1>
          <p className="text-slate-500 mt-2">
            System performance overview and complaint insights
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {[
            {
              title: "Total Complaints",
              value: "1240",
              color: "text-slate-900",
            },
            {
              title: "Resolved",
              value: "860",
              color: "text-green-600",
            },
            {
              title: "Pending",
              value: "320",
              color: "text-yellow-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-3xl p-6 shadow-sm
              "
            >
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                {item.value}
              </h2>
            </div>
          ))}

        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* BAR CHART */}
          <div className="
            bg-white border border-slate-200
            rounded-3xl p-6 shadow-sm
          ">

            <h2 className="text-lg font-semibold text-slate-900">
              Weekly Complaint Trends
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Number of complaints received per day
            </p>

            <div className="mt-6">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={complaintData}>

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Bar
                    dataKey="complaints"
                    fill="#2563EB"
                    radius={[8, 8, 0, 0]}
                  />

                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* PIE CHART */}
          <div className="
            bg-white border border-slate-200
            rounded-3xl p-6 shadow-sm
          ">

            <h2 className="text-lg font-semibold text-slate-900">
              Complaint Status Distribution
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Overall system resolution breakdown
            </p>

            <div className="mt-6 flex items-center justify-center">

              <ResponsiveContainer width="100%" height={260}>
                <PieChart>

                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={90}
                    label
                  >

                    {statusData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>

            </div>

            {/* LEGEND */}
            <div className="flex justify-center gap-6 mt-4">

              {statusData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">

                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
                  />

                  <span className="text-sm text-slate-600">
                    {item.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;