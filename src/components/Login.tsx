import { ChevronDown, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import logo from './Practio logo.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email"); // 'email', 'password', or 'forgot-password'
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep("password");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-[#3C1F3F]">
      <div className="bg-white p-8 rounded-2xl z-10 shadow-lg w-[28rem] text-center">
        {/* Top Logo Section */}
        <div className="bg-[#3C1F3F] text-white text-lg font-bold py-3 rounded-t-2xl z-10 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Forgot Password Section */}
        {step === "forgot-password" ? (
          <>
            <h1 className="text-2xl font-semibold mt-4 mb-6 text-gray-700">
              Reset your password
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              Enter your personal email address or phone number that you use to
              sign in to Practio
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4 text-sm rounded-md">
              <strong>⚠️ Important:</strong> If you’re using RPass, resetting
              your password will cause you to lose access to your RPass Personal
              Vault items.
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className="block text-left text-gray-600 text-sm mb-2">
                Personal email address or phone number
                </label>
                <input
                type="email"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline focus:ring-4 focus:ring-[#3C1F3F] mb-4"
                placeholder="Enter your email or phone"
                required
                />
              <button
                type="submit"
                className="w-full  bg-[#3C1F3F] hover:bg-[#3C1F3F] text-white py-2 rounded-lg font-semibold"
              >
                Continue
              </button>
            </form>
            <button
              className="mt-4 text-sm text-blue-600 font-semibold cursor-pointer"
              onClick={() => setStep("email")}
            >
              ← Back to Login
            </button>
          </>
        ) : step === "email" ? (
          <>
            <h1 className="text-2xl text-center font-semibold mt-4 mb-6 text-gray-700">
              Sign in to Practio
            </h1>
            <form onSubmit={handleEmailSubmit}>
              <label className="block text-left text-gray-600 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C1F3F] mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#3C1F3F] hover:bg-[#3C1F3F] text-white py-2 rounded-lg font-semibold"
              >
                Continue
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              By clicking "Continue" you agree to Practio's{" "}
              <a href="#" className="text-[blue] underline font-semibold">
                User Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[blue] underline font-semibold">
                Privacy Notice
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center mb-4 pt-10">
              <div className="relative inline-block text-left">
                <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-full text-sm cursor-pointer">
                  <div className="h-10 w-12 flex items-center justify-center rounded-full bg-gray-300">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="ml-2">{email}</span>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-semibold mt-4 mb-6 text-gray-700 text-left">
              Enter your password
            </h1>
            <form onSubmit={handlePasswordSubmit}>
              <label className="block text-left text-gray-600 text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C1F3F] pr-10 mb-4"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center pb-4"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5 text-gray-600" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#3C1F3F] hover:bg-[#3C1F3F] text-white py-2 rounded-lg font-semibold"
              >
                Sign in
              </button>
            </form>
            {/* Forgot Password Link */}
            <p
              className="mt-4 text-sm text-blue-600 cursor-pointer font-semibold"
              onClick={() => setStep("forgot-password")}
            >
              Forgot password?
            </p>
          </>
        )}
      </div>
    </div>
  );
}
 
 