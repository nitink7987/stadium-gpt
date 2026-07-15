import { useState } from "react";
import Navbar from "../components/Navbar";

function Assistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAsk = () => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    const q = question.toLowerCase();

    let response = "";

    if (q.includes("gate a")) {
      response =
        "🔴 Gate A is currently experiencing high traffic. Estimated waiting time is 12 minutes.";
    } else if (q.includes("gate b")) {
      response =
        "🟡 Gate B has moderate traffic. Estimated waiting time is 5 minutes.";
    } else if (q.includes("gate c")) {
      response =
        "🟢 Gate C currently has the lowest traffic and is the recommended entry point.";
    } else if (q.includes("which gate") || q.includes("best gate")) {
      response =
        "🟢 Gate C is currently the best option because it has the lowest congestion and fastest entry.";
    } else if (q.includes("food") || q.includes("food court")) {
      response =
        "🍔 The Food Court is located on Level 1 near the Center Plaza.";
    } else if (q.includes("medical") || q.includes("hospital")) {
      response =
        "🚑 The Medical Center is located near Gate D and emergency staff are available 24/7.";
    } else if (q.includes("parking")) {
      response =
        "🚗 Parking Zone P1 is on the North Side and Parking Zone P2 is on the South Side.";
    } else if (q.includes("crowd")) {
      response =
        "📊 Current crowd density is approximately 72%. Gate A is currently the busiest area.";
    } else if (q.includes("occupancy") || q.includes("attendance")) {
      response =
        "👥 Current stadium occupancy is approximately 58,000 spectators.";
    } else if (q.includes("vip")) {
      response =
        "⭐ VIP Zone access is currently open and operating normally.";
    } else if (q.includes("emergency")) {
      response =
        "🚨 In case of emergency, follow the nearest evacuation signs and contact stadium staff immediately.";
    } else if (q.includes("weather")) {
      response =
        "☀ Current weather is 28°C with clear skies and excellent visibility.";
    } else {
      response =
        "🤖 I can help with gates, parking, food courts, crowd status, occupancy, VIP access, weather, medical services, and emergency information.";
    }

    const aiMessage = {
      role: "assistant",
      text: response,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setQuestion("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white">

        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="text-center mb-8">

            <h1 className="text-5xl font-bold text-cyan-400 mb-3">
              🤖 StadiumGPT
            </h1>

            <p className="text-gray-400 text-lg">
              AI-Powered Fan Assistance & Stadium Navigation
            </p>

          </div>

          {/* Status Bar */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">

            <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
              <p className="text-gray-400 text-sm">Crowd Density</p>
              <p className="text-2xl font-bold text-cyan-400">
                72%
              </p>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
              <p className="text-gray-400 text-sm">Occupancy</p>
              <p className="text-2xl font-bold text-green-400">
                58,000
              </p>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
              <p className="text-gray-400 text-sm">Recommended Gate</p>
              <p className="text-2xl font-bold text-yellow-400">
                Gate C
              </p>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl border border-cyan-500/20">
              <p className="text-gray-400 text-sm">System Status</p>
              <p className="text-2xl font-bold text-green-400">
                ● Online
              </p>
            </div>

          </div>

          {/* Chat Container */}
          <div className="bg-gray-900/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5">

            <div className="h-[500px] overflow-y-auto pr-2">

              {messages.length === 0 && (
                <div className="text-center mt-24">
                  <p className="text-5xl mb-4">
                    🏟️
                  </p>

                  <p className="text-gray-400">
                    Ask StadiumGPT anything about the stadium
                  </p>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-cyan-600"
                        : "bg-gray-800 border border-gray-700"
                    }`}
                  >
                    <p className="font-semibold mb-2">
                      {msg.role === "user"
                        ? "👤 You"
                        : "🤖 StadiumGPT"}
                    </p>

                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* Input */}
            <div className="flex gap-3 mt-6">

              <input
                type="text"
                placeholder="Ask about gates, food courts, parking..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAsk();
                  }
                }}
                className="flex-1 p-4 rounded-xl bg-black/50 border border-gray-700 focus:border-cyan-400 outline-none"
              />

              <button
                onClick={handleAsk}
                className="bg-cyan-500 hover:bg-cyan-400 px-8 rounded-xl font-semibold transition-all duration-300"
              >
                Send
              </button>

            </div>

          </div>

          {/* Suggested Questions */}
          <div className="mt-6">

            <h3 className="text-lg font-semibold text-cyan-400 mb-3">
              Suggested Questions
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Which gate should I use?",
                "Where is the food court?",
                "What is the crowd density?",
                "Where is the medical center?",
                "Where is parking?",
                "What is the weather?",
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setQuestion(item)}
                  className="bg-gray-900 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400 px-4 py-2 rounded-xl transition-all duration-300"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Assistant;