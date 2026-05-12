import DashboardLayout from "../../layouts/DashboardLayout";

import {
  MapPin,
  User,
  Phone,
  Mail,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function ManageComplaint() {

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

            <p className="
              text-sm
              font-medium
              text-blue-600
            ">
              Complaint ID #CMP1024
            </p>

            <h1 className="
              mt-2
              text-3xl
              font-bold
              text-slate-900
            ">
              Water Leakage Near Market
            </h1>

            <p className="
              mt-2
              text-slate-500
            ">
              Submitted on 12 May 2026
            </p>

          </div>

          {/* Status */}
          <div className="
            flex
            items-center
            gap-3
            px-5
            py-3
            rounded-2xl
            bg-yellow-100
            text-yellow-700
            w-fit
            font-medium
          ">

            <Clock3 size={20} />

            Pending Review

          </div>

        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        ">

          {/* Left Side */}
          <div className="
            xl:col-span-2
            space-y-6
          ">

            {/* Complaint Info */}
            <div className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6 md:p-8
              shadow-card
            ">

              <h2 className="
                text-2xl
                font-bold
                text-slate-900
              ">
                Complaint Details
              </h2>

              {/* Description */}
              <div className="mt-8">

                <h3 className="
                  text-sm
                  font-medium
                  text-slate-500
                ">
                  Description
                </h3>

                <p className="
                  mt-3
                  leading-7
                  text-slate-700
                ">
                  Continuous water leakage is occurring
                  near the local market road causing
                  water wastage and traffic congestion.
                  The issue has remained unresolved
                  for multiple days.
                </p>

              </div>

              {/* Meta Grid */}
              <div className="
                mt-8
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              ">

                <div className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                ">

                  <p className="
                    text-sm
                    text-slate-500
                  ">
                    Department
                  </p>

                  <h3 className="
                    mt-2
                    font-semibold
                    text-slate-900
                  ">
                    Water Department
                  </h3>

                </div>

                <div className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                ">

                  <p className="
                    text-sm
                    text-slate-500
                  ">
                    Priority
                  </p>

                  <div className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-red-600
                    font-semibold
                  ">

                    <AlertTriangle size={18} />

                    High Priority

                  </div>

                </div>

              </div>

              {/* Location */}
              <div className="
                mt-8
                flex
                items-start
                gap-4
              ">

                <div className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">

                  <MapPin size={22} />

                </div>

                <div>

                  <p className="
                    text-sm
                    text-slate-500
                  ">
                    Complaint Location
                  </p>

                  <h3 className="
                    mt-2
                    font-medium
                    text-slate-900
                  ">
                    MP Nagar Zone 2, Bhopal
                  </h3>

                </div>

              </div>

            </div>

            {/* Evidence */}
            <div className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6 md:p-8
              shadow-card
            ">

              <h2 className="
                text-2xl
                font-bold
                text-slate-900
              ">
                Uploaded Evidence
              </h2>

              <div className="
                mt-8
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              ">

                {[1,2].map((item) => (

                  <div
                    key={item}
                    className="
                      aspect-video
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                      text-slate-400
                    "
                  >

                    Evidence Preview

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Citizen Info */}
            <div className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6
              shadow-card
            ">

              <h2 className="
                text-xl
                font-bold
                text-slate-900
              ">
                Citizen Information
              </h2>

              <div className="
                mt-8
                flex
                flex-col
                gap-5
              ">

                {/* Name */}
                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  ">

                    <User size={20} />

                  </div>

                  <div>

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      Citizen Name
                    </p>

                    <h3 className="
                      mt-1
                      font-medium
                      text-slate-900
                    ">
                      Anuj Tiwari
                    </h3>

                  </div>

                </div>

                {/* Phone */}
                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  ">

                    <Phone size={20} />

                  </div>

                  <div>

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      Phone Number
                    </p>

                    <h3 className="
                      mt-1
                      font-medium
                      text-slate-900
                    ">
                      +91 9876543210
                    </h3>

                  </div>

                </div>

                {/* Email */}
                <div className="
                  flex
                  items-start
                  gap-4
                ">

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  ">

                    <Mail size={20} />

                  </div>

                  <div>

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      Email Address
                    </p>

                    <h3 className="
                      mt-1
                      font-medium
                      text-slate-900
                    ">
                      anuj@example.com
                    </h3>

                  </div>

                </div>

              </div>

            </div>

            {/* Action Panel */}
            <div className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6
              shadow-card
            ">

              <h2 className="
                text-xl
                font-bold
                text-slate-900
              ">
                Complaint Actions
              </h2>

              <div className="
                mt-8
                flex
                flex-col
                gap-4
              ">

                {/* Status Select */}
                <div>

                  <label className="
                    text-sm
                    font-medium
                    text-slate-700
                  ">
                    Update Status
                  </label>

                  <select
                    className="
                      mt-2
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      outline-none
                      bg-white

                      focus:ring-4
                      focus:ring-blue-100
                      focus:border-blue-500
                    "
                  >

                    <option>Pending</option>
                    <option>Accepted</option>
                    <option>In Review</option>
                    <option>Resolved</option>
                    <option>Rejected</option>

                  </select>

                </div>

                {/* Notes */}
                <div>

                  <label className="
                    text-sm
                    font-medium
                    text-slate-700
                  ">
                    Officer Notes
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Add response or internal notes..."
                    className="
                      mt-2
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      py-4
                      resize-none
                      outline-none

                      focus:ring-4
                      focus:ring-blue-100
                      focus:border-blue-500
                    "
                  />

                </div>

                {/* Buttons */}
                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                ">

                  <button
                    className="
                      flex-1
                      h-14
                      rounded-2xl
                      bg-green-600
                      hover:bg-green-700
                      text-white
                      font-medium
                      transition-all
                      duration-200
                    "
                  >
                    Accept Complaint
                  </button>

                  <button
                    className="
                      flex-1
                      h-14
                      rounded-2xl
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      font-medium
                      transition-all
                      duration-200
                    "
                  >
                    Reject Complaint
                  </button>

                </div>

                {/* Save */}
                <button
                  className="
                    h-14
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-medium
                    transition-all
                    duration-200
                  "
                >
                  Save Updates
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default ManageComplaint;