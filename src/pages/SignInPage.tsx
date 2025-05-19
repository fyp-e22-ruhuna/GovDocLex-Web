import { FaRegEyeSlash } from "react-icons/fa";
import signin from "../assets/images/sign.jpg";
import { FaArrowLeft } from "react-icons/fa";
import footerbackheight from "../assets/images/footerbackheight.png";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left: Sign-in form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2 ">
            <button
              className="text-2xl font-extrabold text-green-800 cursor-pointer  "
              onClick={() => (window.location.href = "/")}
              aria-label="Go back to home page"
            >
              <FaArrowLeft className="w-4 text-[#0a1117]" />
            </button>
            <span className="text-2xl font-bold text-[#0a1117]">GovDocLex</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Sign in</h2>
          <p className="mb-6 text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-800 font-semibold hover:underline"
            >
              Create now
            </a>
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="@#*%"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-800"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  tabIndex={-1}
                  aria-label="Show password"
                >
                  <FaRegEyeSlash className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-green-800" />
                Remember me
              </label>
              <a href="#" className="text-sm text-green-800 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0a1117] text-white py-2 rounded font-semibold hover:bg-green-900 transition"
            >
              Sign in
            </button>
          </form>
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
      {/* Right: Promo and features */}
      <div className="hidden md:flex flex-col flex-1 bg-[#0a1117] text-white justify-center px-12 py-8 relative  items-center ">
        {/* Promo card */}
        <div className=" rounded-xl p-6 mb-8 max-w-md  ">
          <img
            src={signin}
            alt="Sign In"
            className="w-full h-96 object-cover rounded-xl mb-4"
          />
        </div>
        {/* Features */}
        <div className="flex items-center justify-center flex-col text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Welcome to the Government Document Extraction Portal
          </h3>
          <p className="text-gray-200 max-w-md ">
            This secure platform enables authorized users to upload, extract, and manage
            critical information from official documents with speed and
            accuracy.
          </p>
        </div>

        <img src={footerbackheight} alt="Background" className="absolute bottom-0 left-0 w-full  object-cover opacity-50" /> 



      </div>
    </div>
  );
}
