import Navbar from "../components/Navbar";
import { useState } from "react";

function Emergency() {
  const [message, setMessage] = useState("");
  const [emergency, setEmergency] = useState(false);

  const [logs, setLogs] = useState([
    "20:45 Stadium monitoring active",
    "20:46 Security systems online",
    "20:47 Medical teams ready",
  ]);

  const addLog = (entry) => {
    setLogs((prev) => [entry, ...prev]);
  };

  const handleEmergency = (type) => {
    setEmergency(true);

    if (type === "medical") {
      setMessage(
        "🚑 Medical team dispatched. Nearest medical center is near Gate D."
      );

      addLog("🚑 Medical emergency reported near Gate D");
    }

    if (type === "crowd") {
      setMessage(
        "⚠ Crowd congestion detected. Redirecting visitors to alternate routes."
      );

      addLog("⚠ Crowd surge detected near Gate A");
    }

    if (type === "security") {
      setMessage(
        "👮 Security team alerted. Please remain calm and follow instructions."
      );

      addLog("👮 Security incident reported");
    }
  };

  const simulateCrowdSurge = () => {
    setEmergency(true);

    setMessage(
      "🚨 Crowd surge detected at Gate A. AI recommends redirecting visitors to Gate C."
    );

    addLog("🚨 Crowd surge simulation activated");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-red-400 mb-8">
          Emergency Response Center
        </h1>

        {/* Emergency Status */}
        <div
          className={`p-6 rounded-xl mb-8 border ${
            emergency
              ? "bg-red-900 border-red-500"
              : "bg-green-900 border-green-500"
          }`}
        >
          <h2 className="text-2xl font-bold">
            Emergency Status
          </h2>

          <p className="text-xl mt-3">
            {emergency
              ? "🚨 ACTIVE EMERGENCY"
              : "✅ NORMAL OPERATIONS"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">

          <button
            onClick={() => handleEmergency("medical")}
            className="bg-red-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            🚑 Medical Emergency
          </button>

          <button
            onClick={() => handleEmergency("crowd")}
            className="bg-yellow-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            ⚠ Crowd Alert
          </button>

          <button
            onClick={() => handleEmergency("security")}
            className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            👮 Security Alert
          </button>

          <button
            onClick={simulateCrowdSurge}
            className="bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            🚨 Simulate Crowd Surge
          </button>

        </div>

        {/* Current Message */}
        {message && (
          <div className="mb-8 bg-gray-900 p-6 rounded-xl border border-red-500">
            {message}
          </div>
        )}

        {/* Emergency Teams */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold text-lg">
              Medical Teams
            </h3>

            <p className="text-3xl text-cyan-400 mt-3">
              14
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold text-lg">
              Police Units
            </h3>

            <p className="text-3xl text-blue-400 mt-3">
              26
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold text-lg">
              Fire Units
            </h3>

            <p className="text-3xl text-red-400 mt-3">
              8
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold text-lg">
              Avg Response Time
            </h3>

            <p className="text-3xl text-green-400 mt-3">
              2.4m
            </p>
          </div>

        </div>

        {/* Evacuation Zones */}
        <div className="bg-gray-900 p-6 rounded-xl mb-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            📍 Evacuation Zones
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div className="bg-black p-4 rounded-lg">
              Zone A → Exit 1
            </div>

            <div className="bg-black p-4 rounded-lg">
              Zone B → Exit 2
            </div>

            <div className="bg-black p-4 rounded-lg">
              Zone C → Exit 3
            </div>

            <div className="bg-black p-4 rounded-lg">
              VIP → VIP Tunnel
            </div>

          </div>

        </div>

        {/* Incident Log */}
        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            📋 Incident Log
          </h2>

          <div className="space-y-3 max-h-64 overflow-y-auto">

            {logs.map((log, index) => (
              <div
                key={index}
                className="bg-black p-3 rounded-lg"
              >
                {log}
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Emergency;