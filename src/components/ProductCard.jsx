function ProductCard({ product }) {
  const { title, price, images, gender, category, tags } = product
  const img = images?.[0] || 'https://images.unsplash.com/photo-1599050751791-caa62a5f5c5f?q=80&w=1200&auto=format&fit=crop'
  return (
    <div className="group rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-700/50 hover:border-cyan-400/40 transition shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 text-xs rounded-full bg-cyan-500 text-slate-900 font-semibold">{gender}</span>
          <span className="px-2 py-1 text-xs rounded-full bg-white/90 text-slate-900 font-semibold">{category}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold tracking-tight">{title}</h3>
          <span className="text-cyan-400 font-bold">${price.toFixed(2)}</span>
        </div>
        {tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.slice(0,3).map((t,i)=> (
              <span key={i} className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-300">{t}</span>
            ))}
          </div>
        ) : null}
        <button className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold hover:opacity-90 transition">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
