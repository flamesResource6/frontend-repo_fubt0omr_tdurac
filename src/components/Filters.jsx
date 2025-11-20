function Filters({ selectedGender, onGenderChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-1">
        {['all','men','women','unisex'].map(g => (
          <button key={g} onClick={()=>onGenderChange(g==='all' ? '' : g)} className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${selectedGender===g || (!selectedGender && g==='all') ? 'bg-cyan-500 text-slate-900' : 'text-slate-200 hover:text-white'}`}>
            {g.charAt(0).toUpperCase()+g.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-1 overflow-x-auto">
        {['all','leggings','joggers','tops','sports-bra','hoodies','shorts'].map(c => (
          <button key={c} onClick={()=>onCategoryChange(c==='all' ? '' : c)} className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${selectedCategory===c || (!selectedCategory && c==='all') ? 'bg-white text-slate-900' : 'text-slate-200 hover:text-white'}`}>
            {c.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ')}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters
