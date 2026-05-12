import DashboardLayout from "../../layouts/DashboardLayout";
import { Upload, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../../components/common/Button";

function CreateComplaint() {
  return (
    <DashboardLayout>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Create Complaint
          </h1>
          <p className="text-slate-500 mt-2">
            Submit civic issues and track resolution status
          </p>
        </div>

        {/* FORM CARD */}
        <div className="
          bg-white
          border border-slate-200
          rounded-3xl
          p-6 md:p-8
          shadow-sm
        ">

          <div className="space-y-6">

            {/* TITLE */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Complaint Title
              </label>

              <input
                type="text"
                placeholder="Enter complaint title"
                className="
                  mt-2 w-full h-14
                  rounded-2xl
                  border border-slate-200
                  px-4
                  outline-none
                  focus:ring-4 focus:ring-blue-100
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* DEPARTMENT */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Department
                </label>

                <select className="
                  mt-2 w-full h-14
                  rounded-2xl
                  border border-slate-200
                  px-4
                  bg-white
                  outline-none
                  focus:ring-4 focus:ring-blue-100
                  focus:border-blue-500
                  transition
                ">
                  <option>Select department</option>
                  <option>Water Department</option>
                  <option>Electricity Department</option>
                  <option>Sanitation Department</option>
                  <option>Road Department</option>
                </select>
              </div>

              {/* PRIORITY */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Priority
                </label>

                <select className="
                  mt-2 w-full h-14
                  rounded-2xl
                  border border-slate-200
                  px-4
                  bg-white
                  outline-none
                  focus:ring-4 focus:ring-blue-100
                  focus:border-blue-500
                  transition
                ">
                  <option>Select priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Description
              </label>

              <textarea
                rows="6"
                placeholder="Explain the issue in detail..."
                className="
                  mt-2 w-full
                  rounded-2xl
                  border border-slate-200
                  px-4 py-4
                  outline-none
                  resize-none
                  focus:ring-4 focus:ring-blue-100
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Location
              </label>

              <div className="
                mt-2 flex items-center gap-3
                h-14
                rounded-2xl
                border border-slate-200
                px-4
                focus-within:ring-4 focus-within:ring-blue-100
                focus-within:border-blue-500
                transition
              ">

                <MapPin size={20} className="text-slate-400" />

                <input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1 outline-none"
                />

              </div>
            </div>

            {/* UPLOAD */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Evidence Upload
              </label>

              <div className="
                mt-2
                border-2 border-dashed border-slate-300
                rounded-3xl
                p-10
                text-center
                hover:border-blue-400
                transition
                cursor-pointer
              ">

                <div className="
                  w-14 h-14
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                  mx-auto
                  flex items-center justify-center
                ">
                  <Upload size={26} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Upload Images / Video
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  PNG, JPG, MP4 up to 10MB
                </p>

              </div>
            </div>

            {/* SUBMIT */}
            <div className="flex justify-end pt-2">

              <Button
                onClick={() =>
                  toast.success("Complaint submitted successfully 🚀")
                }
              >
                Submit Complaint
              </Button>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default CreateComplaint;