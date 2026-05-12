import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";

import {
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";

import { useState } from "react";

import OtpModal from "../../pages/auth/OtpModal";

function Signup() {

  const [showOtpModal, setShowOtpModal] =
    useState(false);
  
  const [loading, setLoading] =
    useState(false);
  
  const [error, setError] =
    useState("");
  
  const [success, setSuccess] =
    useState("");

  const handleSignup = () => {

      setLoading(true);

      setError("");
      setSuccess("");

      setTimeout(() => {
      
        setLoading(false);
      
        setSuccess(
          "Account created successfully!"
        );
      
      }, 2000);
    
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

            <div className="flex flex-col gap-5">

              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                icon={User}
              />

             <div className="relative">

        <InputField
          label="Mobile Number"
          placeholder="Enter mobile number"
          icon={Phone}
        />

                 <button
                   type="button"
                   onClick={() => setShowOtpModal(true)}
                   className="
                     absolute
                     right-3
                     top-[42px]
                     bg-blue-600
                     hover:bg-blue-700
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
                   Verify
                 </button>

                </div>
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          icon={Mail}
          verifyButton={true}
        />

        <InputField
          label="City"
          placeholder="Enter your city"
          icon={MapPin}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Create password"
          icon={Lock}
        />

        <label className="flex items-start gap-3 text-sm text-slate-600">

          <input
            type="checkbox"
            className="
              mt-1
              rounded
              border-slate-300
              text-blue-600
              focus:ring-blue-500
            "
          />

          <span>
            I agree to the Terms & Conditions and Privacy Policy
          </span>

        </label>

        {
        error && (
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
        )
      }
      
      {
        success && (
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
        )
      }
      
              <Button
        className="w-full"
        loading={loading}
        onClick={handleSignup}
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

      </div>

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
      {
      showOtpModal && (
    <OtpModal
      title="Verify Mobile Number"
      subtitle="Enter the OTP sent to your mobile number"
      onClose={() => setShowOtpModal(false)}
    />
    )
    }

    </div>

  </AuthLayout>
);
}

export default Signup;