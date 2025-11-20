import { useState } from 'react'

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-slate-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 ring-1 ring-white/10 shadow-[0_0_25px_rgba(34,211,238,.35)]"></div>
          <span className="text-white text-xl font-semibold tracking-tight">AeroFlex</span>
        </div>

        <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2 w-[42%]">
          <div className="flex-1 flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-2xl px-4 py-2 focus-within:border-cyan-400/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search leggings, joggers, tops..." className="bg-transparent outline-none text-slate-200 placeholder:text-slate-400 w-full" />
          </div>
          <button type="submit" className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition">Search</button>
        </form>

        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-white transition">Sign in</button>
          <button className="relative text-slate-300 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
