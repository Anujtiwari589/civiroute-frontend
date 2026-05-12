import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Building2,
  Users,
  Plus,
  Pencil,
  Trash2,
  ShieldCheck,
} from "lucide-react";

function ManageDepartments() {

  const departments = [
    {
      name: "Water Department",
      officers: 32,
      complaints: 1248,
      status: "Active",
    },
    {
      name: "Electricity Department",
      officers: 24,
      complaints: 964,
      status: "Active",
    },
    {
      name: "Road Maintenance",
      officers: 40,
      complaints: 1812,
      status: "Inactive",
    },
  ];

  const officers = [
    {
      name: "Rahul Sharma",
      role: "Senior Officer",
      department: "Water Department",
      status: "Active",
    },
    {
      name: "Priya Singh",
      role: "Field Officer",
      department: "Electricity Department",
      status: "Active",
    },
    {
      name: "Amit Verma",
      role: "Inspector",
      department: "Road Maintenance",
      status: "Inactive",
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
              Department Management
            </h1>

            <p className="
              mt-2
              text-slate-500
            ">
              Manage departments, officers and platform operations
            </p>

          </div>

          <button
            className="
              h-14
              px-6
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
              shadow-card

              flex
              items-center
              gap-3

              transition-all
              duration-200
            "
          >

            <Plus size={20} />

            Add Department

          </button>

        </div>

        {/* Top Stats */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5
        ">

          {/* Total Departments */}
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

              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">
                  Total Departments
                </p>

                <h2 className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                ">
                  18
                </h2>

              </div>

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              ">

                <Building2 size={26} />

              </div>

            </div>

          </div>

          {/* Officers */}
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

              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">
                  Total Officers
                </p>

                <h2 className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                ">
                  264
                </h2>

              </div>

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-50
                text-cyan-600
                flex
                items-center
                justify-center
              ">

                <Users size={26} />

              </div>

            </div>

          </div>

          {/* Active Departments */}
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

              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">
                  Active Departments
                </p>

                <h2 className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                ">
                  16
                </h2>

              </div>

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

            </div>

          </div>

        </div>

        {/* Departments Table */}
        <div className="
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
                Departments
              </h2>

              <p className="
                mt-1
                text-slate-500
              ">
                Manage all civic departments
              </p>

            </div>

          </div>

          <div className="
            mt-8
            overflow-x-auto
          ">

            <table className="
              w-full
              min-w-[750px]
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
                    Officers
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
                    Status
                  </th>

                  <th className="
                    text-right
                    pb-4
                    text-sm
                    font-semibold
                    text-slate-500
                  ">
                    Actions
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
                      {item.officers}
                    </td>

                    <td className="
                      py-5
                      text-slate-700
                    ">
                      {item.complaints}
                    </td>

                    <td className="py-5">

                      <span className={`
                        px-3
                        py-1.5
                        rounded-xl
                        text-sm
                        font-medium

                        ${
                          item.status === "Active"
                            ? `
                              bg-green-100
                              text-green-700
                            `
                            : `
                              bg-red-100
                              text-red-700
                            `
                        }
                      `}>

                        {item.status}

                      </span>

                    </td>

                    <td className="
                      py-5
                      text-right
                    ">

                      <div className="
                        flex
                        items-center
                        justify-end
                        gap-4
                      ">

                        <button
                          className="
                            text-blue-600
                          "
                        >

                          <Pencil size={18} />

                        </button>

                        <button
                          className="
                            text-red-600
                          "
                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Officers Table */}
        <div className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-6 md:p-8
          shadow-card
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          ">

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-slate-900
              ">
                Officers Management
              </h2>

              <p className="
                mt-1
                text-slate-500
              ">
                Manage department officers and access
              </p>

            </div>

            <button
              className="
                h-14
                px-6
                rounded-2xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-medium
                shadow-card

                flex
                items-center
                gap-3

                transition-all
                duration-200
              "
            >

              <Plus size={20} />

              Add Officer

            </button>

          </div>

          <div className="
            mt-8
            overflow-x-auto
          ">

            <table className="
              w-full
              min-w-[750px]
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
                    Officer
                  </th>

                  <th className="
                    text-left
                    pb-4
                    text-sm
                    font-semibold
                    text-slate-500
                  ">
                    Role
                  </th>

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
                    Status
                  </th>

                  <th className="
                    text-right
                    pb-4
                    text-sm
                    font-semibold
                    text-slate-500
                  ">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {officers.map((item, index) => (

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
                      {item.role}
                    </td>

                    <td className="
                      py-5
                      text-slate-700
                    ">
                      {item.department}
                    </td>

                    <td className="py-5">

                      <span className={`
                        px-3
                        py-1.5
                        rounded-xl
                        text-sm
                        font-medium

                        ${
                          item.status === "Active"
                            ? `
                              bg-green-100
                              text-green-700
                            `
                            : `
                              bg-red-100
                              text-red-700
                            `
                        }
                      `}>

                        {item.status}

                      </span>

                    </td>

                    <td className="
                      py-5
                      text-right
                    ">

                      <div className="
                        flex
                        items-center
                        justify-end
                        gap-4
                      ">

                        <button
                          className="
                            text-blue-600
                          "
                        >

                          <Pencil size={18} />

                        </button>

                        <button
                          className="
                            text-red-600
                          "
                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default ManageDepartments;