import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CrowdChart from "../components/CrowdChart";

function Dashboard() {
  const [crowdDensity, setCrowdDensity] = useState(72);
  const [occupancy, setOccupancy] = useState(58000);
  const [selectedGate, setSelectedGate] = useState("");
  const [time, setTime] = useState(new Date());
  const [matchMinute, setMatchMinute] = useState(67);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrowdDensity((prev) =>
        Math.max(60, Math.min(90, prev + Math.floor(Math.random() * 5 - 2)))
      );

      setOccupancy((prev) =>
        prev + Math.floor(Math.random() * 200 - 100)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMatchMinute((prev) => (prev < 90 ? prev + 1 : 90));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
  <h1 className="text-5xl font-bold text-cyan-400">
    Stadium Dashboard
  </h1>

  <div className="flex items-center gap-2 mt-2">
    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

    <span className="text-green-400 font-semibold">
      LIVE OPERATIONS
    </span>
  </div>
</div>

          <div className="text-right">
            <p className="text-cyan-400 font-semibold">
              {time.toLocaleTimeString()}
            </p>

            <p className="text-gray-400 text-sm">
              Live Monitoring
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">

  <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
    <p className="text-gray-400 text-sm">
      Stadium Status
    </p>

    <p className="text-green-400 font-bold">
      ● Operational
    </p>
  </div>

  <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
    <p className="text-gray-400 text-sm">
      Match
    </p>

    <p className="text-cyan-400 font-bold">
      Argentina vs Brazil
    </p>
  </div>

  <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
    <p className="text-gray-400 text-sm">
      Weather
    </p>

    <p className="text-yellow-400 font-bold">
      28°C
    </p>
  </div>

  <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
    <p className="text-gray-400 text-sm">
      AI Engine
    </p>

    <p className="text-green-400 font-bold">
      Active
    </p>
  </div>

</div>

        {/* Match Status */}
        <div className="mb-8 bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-xl border border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-300">
            ⚽ Live Match Status
          </h2>

          <div className="mt-4 grid md:grid-cols-4 gap-6">

            <div>
              <p className="text-gray-400">Match</p>
              <p className="text-xl font-bold">
                Argentina 🇦🇷 vs Brazil 🇧🇷
              </p>
            </div>

            <div>
              <p className="text-gray-400">Score</p>
              <p className="text-3xl font-bold text-green-400">
                2 - 1
              </p>
            </div>

            <div>
              <p className="text-gray-400">Match Time</p>
              <p className="text-3xl font-bold text-yellow-400">
                {matchMinute}'
              </p>
            </div>

            <div>
              <p className="text-gray-400">Attendance</p>
              <p className="text-xl font-bold text-cyan-400">
                {occupancy.toLocaleString()}
              </p>
            </div>

          </div>
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Crowd Density
            </h2>

            <p className="text-3xl text-green-400 mt-4">
              {crowdDensity}%
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Active Alerts
            </h2>

            <p className="text-3xl text-yellow-400 mt-4">
              2
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Occupancy
            </h2>

            <p className="text-3xl text-cyan-400 mt-4">
              {occupancy.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              AI System Status
            </h2>

            <p className="text-3xl text-green-400 mt-4">
              ● Online
            </p>
          </div>

        </div>

        {/* AI Prediction */}
        <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-700">

          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            AI Crowd Prediction
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>🔴 Gate A</span>
              <span>High Traffic</span>
            </div>

            <div className="flex justify-between">
              <span>🟡 Gate B</span>
              <span>Moderate Traffic</span>
            </div>

            <div className="flex justify-between">
              <span>🟢 Gate C</span>
              <span>Low Traffic</span>
            </div>

          </div>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500 rounded-xl">

            <p className="text-cyan-300 font-semibold">
              🤖 AI Recommendation
            </p>

            <p className="mt-2 text-gray-300">
              Redirect incoming spectators from Gate A to Gate C
              to reduce congestion and improve entry speed.
            </p>

          </div>

        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
  <h2 className="text-xl font-bold">
    Weather
  </h2>

  <p className="text-3xl text-blue-400 mt-4">
    28°C
  </p>

  <p className="text-gray-400 mt-2">
    Clear Sky
  </p>
</div>

        {/* Crowd Chart */}
        <CrowdChart />

        {/* Alert Feed */}
        <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">

          <h2 className="text-2xl font-bold text-red-400 mb-4">
            🚨 Live Alert Feed
          </h2>

          <div className="space-y-3">

            <div className="bg-red-500/10 border border-red-500 p-3 rounded-lg">
              ⚠ High crowd buildup detected at Gate A
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500 p-3 rounded-lg">
              🟡 Queue length increasing near Food Court
            </div>

            <div className="bg-green-500/10 border border-green-500 p-3 rounded-lg">
              ✅ Gate C congestion normalized
            </div>

          </div>

        </div>

        <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">

  <h2 className="text-2xl font-bold text-green-400 mb-4">
    🛡 Security Monitoring
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    <div className="bg-black p-4 rounded-xl">
      Cameras Online
      <p className="text-3xl text-green-400 mt-2">
        248
      </p>
    </div>

    <div className="bg-black p-4 rounded-xl">
      Security Staff
      <p className="text-3xl text-cyan-400 mt-2">
        162
      </p>
    </div>

    <div className="bg-black p-4 rounded-xl">
      Threat Level
      <p className="text-3xl text-green-400 mt-2">
        LOW
      </p>
    </div>

  </div>

</div>

<div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">

  <h2 className="text-2xl font-bold text-red-400 mb-4">
    🚑 Emergency Response
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    <div className="bg-black p-4 rounded-xl">
      Medical Teams
      <p className="text-3xl text-cyan-400 mt-2">
        14
      </p>
    </div>

    <div className="bg-black p-4 rounded-xl">
      Ambulances
      <p className="text-3xl text-green-400 mt-2">
        6
      </p>
    </div>

    <div className="bg-black p-4 rounded-xl">
      Response Time
      <p className="text-3xl text-yellow-400 mt-2">
        2.4m
      </p>
    </div>

  </div>

</div>

        {/* Stadium Heatmap */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Stadium Heatmap
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div
              onClick={() => setSelectedGate("Gate A")}
              className="bg-red-600/80 border border-red-400 hover:shadow-lg hover:shadow-red-500/30 p-8 rounded-xl text-center font-bold cursor-pointer hover:scale-105 transition"
            >
              Gate A
            </div>

            <div
              onClick={() => setSelectedGate("Gate B")}
              className="bg-yellow-500/80 border border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/30 p-8 rounded-xl text-center font-bold cursor-pointer hover:scale-105 transition"
            >
              Gate B
            </div>

            <div
              onClick={() => setSelectedGate("Gate C")}
              className="bg-green-600/80 border border-green-400 hover:shadow-lg hover:shadow-green-500/30 p-8 rounded-xl text-center font-bold cursor-pointer hover:scale-105 transition"
            >
              Gate C
            </div>

            <div
              onClick={() => setSelectedGate("VIP Zone")}
              className="bg-blue-600/80 border border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 p-8 rounded-xl text-center font-bold cursor-pointer hover:scale-105 transition"
            >
              VIP Zone
            </div>

          </div>

          {selectedGate && (
            <div className="mt-6 bg-gray-900 border border-cyan-500 rounded-xl p-6">

              <h3 className="text-xl font-bold text-cyan-400">
                {selectedGate}
              </h3>

              <p className="mt-3 text-gray-300">
                Live Stadium Intelligence
              </p>

              <p className="mt-4 text-lg">
                {
                  selectedGate === "Gate A"
                    ? "🔴 High Traffic • Estimated wait: 12 mins"
                    : selectedGate === "Gate B"
                    ? "🟡 Moderate Traffic • Estimated wait: 5 mins"
                    : selectedGate === "Gate C"
                    ? "🟢 Low Traffic • Fastest Entry Route"
                    : "🔵 VIP Access • Priority Entry Open"
                }
              </p>

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;