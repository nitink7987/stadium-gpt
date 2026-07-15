function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">

      <div className="mb-6">
        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
          FIFA World Cup 2026 AI Platform
        </span>
      </div>

      <h1 className="text-6xl font-bold max-w-5xl leading-tight">
        Smart Stadium Operations Powered By
        <span className="text-cyan-400"> Generative AI</span>
      </h1>

      <p className="text-gray-400 text-xl mt-8 max-w-3xl">
        Improve crowd management, navigation, emergency response,
        multilingual assistance and real-time decision making.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600">
          Launch Dashboard
        </button>

        <button className="border border-gray-700 px-8 py-4 rounded-xl hover:border-cyan-400">
          View Features
        </button>
      </div>

    </section>
  );
}

export default Hero;