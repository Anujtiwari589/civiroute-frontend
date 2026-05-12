import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";

import {
  User,
  Lock,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { login } from "../../api/authApi";
import { setAuth } from "../../utils/auth";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {

  setLoading(true);
  setError("");

  try {

    const res = await login(username, password, role);

    const {
      token,
      user: userData,
    } = res;

    setAuth({
      token,
      role: userData.role,
    });

    // Redirect
    if (userData.role === "citizen") {
      navigate("/citizen");
    }

    else if (userData.role === "department") {
      navigate("/department");
    }

    else if (userData.role === "admin") {
      navigate("/admin");
    }

  } catch (err) {

    setError(err.response?.data?.message || "Invalid credentials");

  } finally {

    setLoading(false);

  }
};

  return (

    <div className="
      min-h-screen
      bg-[#F8FAFC]
      flex
      items-center
      justify-center
      p-4
    ">

      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="
            w-14
            h-14
            bg-blue-600
            rounded-2xl
            mx-auto
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            shadow-card
          ">
            S
          </div>

          <h1 className="
            mt-5
            text-3xl
            font-bold
            text-slate-900
          ">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue
          </p>

        </div>

        {/* Login Card */}
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

            {/* Username */}
            <InputField
              label="Username"
              placeholder="Enter username"
              icon={User}
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

            {/* Password */}
            <InputField
              label="Password"
              type="password"
              placeholder="Enter password"
              icon={Lock}
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {/* Role */}
            <div>

              <label className="
                block
                mb-2
                text-sm
                font-medium
                text-slate-700
              ">
                Login As
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="
                  w-full
                  h-12
                  px-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  outline-none
                  focus:ring-4
                  focus:ring-blue-100
                  text-slate-700
                "
              >

                <option value="citizen">
                  Citizen
                </option>

                <option value="department">
                  Department
                </option>

                <option value="admin">
                  Super Admin
                </option>

              </select>

            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Remember */}
            <div className="
              flex
              items-center
              justify-between
              text-sm
            ">

              <label className="
                flex
                items-center
                gap-2
                text-slate-600
              ">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="
                text-blue-600
                font-medium
              ">
                Forgot Password?
              </button>

            </div>

            {/* Button */}
            <Button
              className="w-full"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </Button>

          </div>

          {/* Bottom */}
          <p className="
            text-sm
            text-center
            text-slate-500
            mt-6
          ">

            Don’t have an account?

            <Link
              to="/signup"
              className="
                text-blue-600
                font-medium
                ml-1
              "
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;