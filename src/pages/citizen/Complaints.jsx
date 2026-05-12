import DashboardLayout from "../../layouts/DashboardLayout";
import EmptyState from "../../components/ui/EmptyState";
import ErrorState from "../../components/ui/ErrorState";
import TableFilters from "../../components/ui/TableFilters";

import { useEffect, useState } from "react";
import { getComplaints } from "../../api/complaintsApi";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Complaints() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComplaints();
        setComplaints(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = complaints.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status ? item.status === status : true;

    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="
          flex flex-col lg:flex-row
          lg:items-center lg:justify-between
          gap-4
        ">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Complaints
            </h1>
            <p className="text-slate-500 mt-1">
              Manage and track submitted complaints
            </p>
          </div>

          <button
            onClick={() => navigate("/create-complaint")}
            className="
              bg-blue-600 hover:bg-blue-700
              text-white rounded-2xl
              px-5 py-3 font-medium
              transition
            "
          >
            Create Complaint
          </button>

        </div>

        {/* FILTERS */}
        <div className="
          bg-white border border-slate-200
          rounded-3xl p-5
        ">
          <TableFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
          />
        </div>

        {/* STATES */}
        {error ? (
          <ErrorState onRetry={() => setError(false)} />
        ) : loading ? (

          // 🔥 CLEAN LOADING UI (improved)
          <div className="bg-white border border-slate-200 rounded-3xl p-6 text-slate-500">
            Loading complaints...
          </div>

        ) : filteredData.length === 0 ? (
          <EmptyState
            title="No Complaints Found"
            description="Try adjusting search or filters."
            actionText="Create Complaint"
            onAction={() => navigate("/create-complaint")}
          />
        ) : (

          /* TABLE CARD */
          <div className="
            bg-white
            border border-slate-200
            rounded-3xl
            overflow-hidden
            shadow-sm
          ">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                {/* HEADER */}
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    {["ID", "Title", "Department", "Status", "Date", "Action"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>

                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="
                        border-t border-slate-100
                        hover:bg-slate-50
                        transition
                      "
                    >

                      <td className="px-6 py-5 font-medium text-slate-900">
                        #{item.id}
                      </td>

                      <td className="px-6 py-5 text-slate-700 font-medium">
                        {item.title}
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {item.department}
                      </td>

                      <td className="px-6 py-5">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${getStatusStyle(item.status)}
                        `}>
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-slate-500">
                        {item.date}
                      </td>

                      <td className="px-6 py-5">
                        <button className="
                          w-10 h-10
                          rounded-xl
                          border border-slate-200
                          flex items-center justify-center
                          hover:bg-slate-100
                          transition
                        ">
                          <Eye size={18} />
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </div>

    </DashboardLayout>
  );
}

export default Complaints;