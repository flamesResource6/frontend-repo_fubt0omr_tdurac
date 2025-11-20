import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [gender, setGender] = useState('')
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchProducts = async (params = {}) => {
    setLoading(true)
    setError('')
    try {
      const usp = new URLSearchParams()
      if (params.gender) usp.set('gender', params.gender)
      if (params.category) usp.set('category', params.category)
      if (params.q) usp.set('q', params.q)
      const res = await fetch(`${baseUrl}/api/products?${usp.toString()}`)
      if (!res.ok) throw new Error('Failed to load products')
      const data = await res.json()
      setProducts(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts({ gender, category, q: query })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, category])

  const onSearch = (q) => {
    setQuery(q)
    fetchProducts({ gender, category, q })
  }

  const emptyState = !loading && products.length === 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar onSearch={onSearch} />
      <Hero />

      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Explore the collection</h2>
          <Filters selectedGender={gender || 'all'} onGenderChange={setGender} selectedCategory={category || 'all'} onCategoryChange={setCategory} />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_,i)=> (
              <div key={i} className="animate-pulse h-72 rounded-2xl bg-slate-800/50 border border-slate-700/40" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-500/10 text-red-300 border border-red-500/30 rounded-xl p-4">
            {error}
          </div>
        ) : emptyState ? (
          <div className="text-slate-300">No products found. Try adjusting filters.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p, idx) => (
              <ProductCard key={idx} product={p} />
            ))}
          </div>
        )}
      </section>

      <footer className="mt-20 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} AeroFlex. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
