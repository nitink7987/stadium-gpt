function Features() {
  return (
    <section className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Core AI Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
          <div className="text-5xl mb-4">🧠</div>
          <h3 className="text-2xl font-bold mb-3">
            AI Fan Assistant
          </h3>
          <p className="text-gray-400">
            Smart navigation and stadium guidance.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-2xl font-bold mb-3">
            Crowd Intelligence
          </h3>
          <p className="text-gray-400">
            Real-time crowd prediction and monitoring.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
          <div className="text-5xl mb-4">🚨</div>
          <h3 className="text-2xl font-bold mb-3">
            Emergency Response
          </h3>
          <p className="text-gray-400">
            AI-powered incident assistance and alerts.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;