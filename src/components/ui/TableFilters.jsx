import { Search } from "lucide-react";

function TableFilters({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="
      flex flex-col md:flex-row
      md:items-center
      gap-4
      mb-6
    ">

      {/* SEARCH BOX */}
      <div className="
        flex items-center gap-3
        flex-1
        bg-white
        border border-slate-200
        rounded-2xl
        px-4
        h-12
        focus-within:border-blue-500
        focus-within:ring-4
        focus-within:ring-blue-100
        transition-all
      ">

        <Search size={18} className="text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search complaints..."
          className="
            w-full
            outline-none
            text-sm text-slate-700
            placeholder:text-slate-400
          "
        />

      </div>

      {/* STATUS FILTER */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="
          h-12
          px-4
          rounded-2xl
          border border-slate-200
          bg-white
          text-sm text-slate-700
          outline-none
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          transition-all
        "
      >

        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>

      </select>

    </div>
  );
}

export default TableFilters;