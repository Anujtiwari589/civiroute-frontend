import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";

import {
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useState, useEffect } from "react";
import OtpModal from "../../pages/auth/OtpModal";
import { signup } from "../../api/authApi";

function Signup() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    city_id: "",
    pincode: "",
    password: "",
    confirm_password: "",
  });

  const [states, setStates] = useState([
    { id: 1, name: "Madhya Pradesh" },
    { id: 2, name: "Maharashtra" },
    { id: 3, name: "Gujarat" },
  ]);

  const [cities, setCities] = useState([]);

  const [cityMap, setCityMap] = useState({
    1: [
      { id: 1, name: "Bhopal" },
      { id: 2, name: "Indore" },
      { id: 3, name: "Jabalpur" },
    ],
    2: [
      { id: 4, name: "Mumbai" },
      { id: 5, name: "Pune" },
    ],
    3: [
      { id: 6, name: "Ahmedabad" },
      { id: 7, name: "Surat" },
    ],
  });

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mobileVerified, setMobileVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update cities when state changes
    if (name === "state") {
      const stateCities = cityMap[value] || [];
      setCities(stateCities);
      setFormData(prev => ({
        ...prev,
        city_id: ""
      }));
    }
  };

  // Handle signup submission
  const handleSignup = async (e) => {
    e.preventDefault();
    
    setError("");
    setSuccess("");

    // Validation
    if (!formData.full_name || !formData.email || !formData.mobile || !formData.address || !formData.state || !formData.city_id || !formData.pincode || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (formData.pincode.length !== 6) {
      setError("Pincode must be 6 digits");
      return;
    }

    try {
      setLoading(true);

      const response = await signup({
        full_name: formData.full_name,
        email: formData.email,
        mobile: formData.mobile,
        address: formData.address,
        city_id: parseInt(formData.city_id),
        pincode: formData.pincode,
        password: formData.password,
        confirm_password: formData.confirm_password,
      });

      if (response.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Citizen Account"
      subtitle="Join the modern civic-tech platform"
    >
      <div className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        shadow-card
        p-6
        md:p-8
      ">

        <form onSubmit={handleSignup} className="flex flex-col gap-5">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="relative mt-2">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="full_name"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm font-medium text-slate-700">Mobile Number</label>
            <div className="relative mt-2">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="mobile"
                placeholder="10-digit mobile number"
                maxLength="10"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full pl-12 pr-24 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowOtpModal(true)}
                disabled={!formData.mobile || formData.mobile.length !== 10}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:bg-slate-300
                  text-white
                  text-xs
                  font-medium
                  px-3
                  py-1.5
                  rounded-lg
                  transition-all
                  duration-200
                "
              >
                {mobileVerified ? "✓ Verified" : "Verify"}
              </button>
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <div className="relative mt-2">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium text-slate-700">Address</label>
            <textarea
              name="address"
              placeholder="Enter your full address"
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* State */}
          <div>
            <label className="text-sm font-medium text-slate-700">State</label>
            <div className="relative mt-2">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* City */}
          {formData.state && (
            <div>
              <label className="text-sm font-medium text-slate-700">City</label>
              <div className="relative mt-2">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  name="city_id"
                  value={formData.city_id}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Pincode */}
          <div>
            <label className="text-sm font-medium text-slate-700">Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="6-digit pincode"
              maxLength="6"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative mt-2">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="relative mt-2">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </label>

          {/* Error Message */}
          {error && (
            <div className="
              bg-red-50
              border
              border-red-200
              text-red-600
              text-sm
              rounded-xl
              px-4
              py-3
            ">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="
              bg-green-50
              border
              border-green-200
              text-green-700
              text-sm
              rounded-xl
              px-4
              py-3
            ">
              {success}
            </div>
          )}

          {/* Submit Button */}
          <Button
            className="w-full"
            loading={loading}
          >
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-sm text-slate-400">
              OR
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="
              w-full
              border
              border-slate-300
              rounded-xl
              py-3
              font-medium
              text-slate-700
              hover:bg-slate-50
              transition-all
              duration-200
            "
          >
            Continue with Google
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-sm text-center text-slate-500 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 font-medium ml-1"
          >
            Sign In
          </Link>
        </p>

        {/* OTP Modal */}
        {showOtpModal && (
          <OtpModal
            title="Verify Mobile Number"
            subtitle="Enter the OTP sent to your mobile number"
            onClose={() => setShowOtpModal(false)}
            onVerify={() => {
              setMobileVerified(true);
              setShowOtpModal(false);
            }}
          />
        )}

      </div>

    </AuthLayout>
  );
}

export default Signup;