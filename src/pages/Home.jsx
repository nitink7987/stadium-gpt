import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Hero />
        <Features />
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 mt-20 py-6 text-center text-gray-400">
        <p>
          ⚽ StadiumGPT • Smart Stadium Operations Platform
        </p>

        <p className="text-sm mt-2">
          AI-Powered Crowd Management • Emergency Response • Fan Assistance
        </p>
      </footer>

    </div>
  );
}

export default Home;