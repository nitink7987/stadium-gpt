import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-cyan-500/20 text-white">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-black font-bold">
            ⚽
          </div>

          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              StadiumGPT
            </h1>

            <p className="text-xs text-gray-400">
              Smart Stadium Operations
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          <Link
            to="/assistant"
            className="px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
          >
            🤖 Assistant
          </Link>

          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/emergency"
            className="px-4 py-2 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
          >
            🚨 Emergency
          </Link>

        </div>

        {/* System Status */}
        <div className="hidden md:flex items-center gap-3 bg-gray-900/70 border border-cyan-500/20 px-4 py-2 rounded-xl">

          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-green-400 font-semibold">
            System Online
          </span>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;