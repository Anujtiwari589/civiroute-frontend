import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

function Profile() {

  return (
    <DashboardLayout>

      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="
          flex flex-col md:flex-row
          md:items-center md:justify-between
          gap-5
        ">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Profile
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your personal information and security settings
            </p>
          </div>

          <button className="
            bg-blue-600 hover:bg-blue-700
            text-white
            px-6 py-3
            rounded-2xl
            font-medium
            transition
            shadow-sm
          ">
            Edit Profile
          </button>

        </div>

        {/* MAIN CARD */}
        <div className="
          bg-white
          border border-slate-200
          rounded-3xl
          p-6 md:p-8
          shadow-sm
        ">

          <div className="
            flex flex-col md:flex-row
            gap-6
          ">

            {/* AVATAR */}
            <div className="
              w-24 h-24
              rounded-3xl
              bg-blue-600
              text-white
              flex items-center justify-center
              text-3xl font-bold
              shrink-0
            ">
              A
            </div>

            {/* INFO */}
            <div className="flex-1">

              <div className="
                flex flex-col lg:flex-row
                lg:items-center lg:justify-between
                gap-3
              ">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Anuj Tiwari
                  </h2>
                  <p className="mt-1 text-slate-500">
                    Citizen User
                  </p>
                </div>

                <div className="
                  flex items-center gap-2
                  bg-green-50 text-green-700
                  px-4 py-2
                  rounded-2xl
                  w-fit
                ">
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-medium">
                    Verified Account
                  </span>
                </div>

              </div>

              {/* CONTACT GRID */}
              <div className="
                mt-6
                grid grid-cols-1 md:grid-cols-3
                gap-5
              ">

                {[
                  { icon: Mail, label: "Email", value: "anuj@example.com" },
                  { icon: Phone, label: "Phone", value: "+91 9876543210" },
                  { icon: MapPin, label: "Location", value: "Bhopal, MP" },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div key={i} className="flex gap-3 items-start">

                      <div className="
                        w-10 h-10
                        rounded-2xl
                        bg-blue-50
                        text-blue-600
                        flex items-center justify-center
                      ">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          {item.value}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* SECURITY */}
          <div className="
            bg-white border border-slate-200
            rounded-3xl p-6 md:p-8
            shadow-sm
          ">

            <div className="flex items-center gap-3">

              <div className="
                w-11 h-11
                rounded-2xl
                bg-blue-50
                text-blue-600
                flex items-center justify-center
              ">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Security
                </h2>
                <p className="text-sm text-slate-500">
                  Manage account protection
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div className="
                flex items-center justify-between
                border border-slate-200
                rounded-2xl p-4
              ">

                <div className="flex items-center gap-3">

                  <div className="
                    w-10 h-10
                    rounded-2xl
                    bg-slate-100
                    flex items-center justify-center
                  ">
                    <Lock size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-slate-900">
                      Password
                    </p>
                    <p className="text-xs text-slate-500">
                      Updated recently
                    </p>
                  </div>

                </div>

                <button className="text-blue-600 font-medium text-sm">
                  Change
                </button>

              </div>

              <div className="
                flex items-center justify-between
                border border-slate-200
                rounded-2xl p-4
              ">

                <div>
                  <p className="font-medium text-slate-900">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-slate-500">
                    Add extra security layer
                  </p>
                </div>

                <button className="
                  bg-blue-600 hover:bg-blue-700
                  text-white text-sm
                  px-4 py-2
                  rounded-xl
                ">
                  Enable
                </button>

              </div>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="
            bg-white border border-slate-200
            rounded-3xl p-6 md:p-8
            shadow-sm
          ">

            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-5">

              {[1,2,3].map((i) => (
                <div key={i} className="flex gap-3">

                  <div className="
                    w-10 h-10
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex items-center justify-center
                  ">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="font-medium text-slate-900">
                      Complaint Updated
                    </p>
                    <p className="text-sm text-slate-500">
                      Status moved to review stage
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      2 hours ago
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

export default Profile;