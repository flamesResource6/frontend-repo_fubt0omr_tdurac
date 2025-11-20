function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_-10%_10%,rgba(56,189,248,.15),transparent),radial-gradient(900px_300px_at_110%_-10%,rgba(59,130,246,.12),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevate your everyday. Engineered for motion.
          </h1>
          <p className="mt-6 text-slate-300 text-lg">
            Premium athleisure for men and women blending performance fabrics, futuristic silhouettes, and cloud–level comfort.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:translate-y-[-1px] transition">Shop Collection</a>
            <a href="#new" className="px-6 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-white hover:bg-slate-800 transition">New Arrivals</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-slate-400">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"/> Quick-dry</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-400 rounded-full"/> 4-way stretch</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-400 rounded-full"/> Breathable</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-2xl rounded-[3rem]" />
          <img src="https://images.unsplash.com/photo-1648748571003-98d6ff522019?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdGhsZWlzdXJlfGVufDB8MHx8fDE3NjM2NTk3NzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Athleisure" className="relative rounded-[2rem] border border-white/10 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
