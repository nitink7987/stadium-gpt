import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

function CrowdChart() {
  const [data, setData] = useState([
    { time: "01", crowd: 70 },
    { time: "02", crowd: 72 },
    { time: "03", crowd: 68 },
    { time: "04", crowd: 75 },
    { time: "05", crowd: 73 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newValue = Math.floor(65 + Math.random() * 20);

        return [
          ...prev.slice(1),
          {
            time: new Date()
              .toLocaleTimeString([], {
                minute: "2-digit",
                second: "2-digit",
              }),
            crowd: newValue,
          },
        ];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 bg-gray-900/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-cyan-400">
          📈 Live Crowd Analytics
        </h2>

        <div className="flex items-center gap-2 text-green-400">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
          Live
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">
            Current Density
          </p>
          <p className="text-2xl font-bold text-cyan-400">
            {data[data.length - 1].crowd}%
          </p>
        </div>

        <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">
            Peak Today
          </p>
          <p className="text-2xl font-bold text-red-400">
            89%
          </p>
        </div>

        <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">
            AI Status
          </p>
          <p className="text-2xl font-bold text-green-400">
            Normal
          </p>
        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="crowdGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#06b6d4"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#06b6d4"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f2937"
          />

          <XAxis
            dataKey="time"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
            domain={[50, 100]}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #06b6d4",
              borderRadius: "12px",
            }}
          />

          <Area
            type="monotone"
            dataKey="crowd"
            stroke="#06b6d4"
            fill="url(#crowdGradient)"
          />

          <Line
            type="monotone"
            dataKey="crowd"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default CrowdChart;