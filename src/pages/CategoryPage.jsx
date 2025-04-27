import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFilter, FaChevronDown, FaSearch } from 'react-icons/fa'

import InsuranceCard from '../components/ui/InsuranceCard'
import { mockedInsurances, mockedCategories } from '../data/mockData'

const CategoryPage = () => {
  const { categorySlug } = useParams()
  const [category, setCategory] = useState(null)
  const [insurances, setInsurances] = useState([])
  const [filteredInsurances, setFilteredInsurances] = useState([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    rating: 0,
    sortBy: 'recommended'
  })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Find the category
    const foundCategory = mockedCategories.find(cat => cat.slug === categorySlug)
    
    if (foundCategory) {
      setCategory(foundCategory)
      document.title = `${foundCategory.name} - AssuranceCompare`
      
      // Get insurances for this category
      const categoryInsurances = mockedInsurances.filter(
        insurance => insurance.categorySlug === categorySlug
      )
      
      setInsurances(categoryInsurances)
      setFilteredInsurances(categoryInsurances)
    }
    
    // Reset filters
    setFilters({
      priceRange: [0, 200],
      rating: 0,
      sortBy: 'recommended'
    })
    
    // Scroll to top
    window.scrollTo(0, 0)
  }, [categorySlug])

  // Apply filters and search
  useEffect(() => {
    if (!insurances.length) return
    
    let result = [...insurances]
    
    // Apply price filter
    result = result.filter(
      ins => ins.price >= filters.priceRange[0] && ins.price <= filters.priceRange[1]
    )
    
    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter(ins => ins.rating >= filters.rating)
    }
    
    // Apply search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        ins => ins.name.toLowerCase().includes(term) || 
               ins.description.toLowerCase().includes(term)
      )
    }
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default: // recommended - no change to order
        break
    }
    
    setFilteredInsurances(result)
  }, [insurances, filters, searchTerm])

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen)
  }

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    })
  }

  if (!category) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Catégorie non trouvée</h2>
        <p className="mb-6">La catégorie que vous recherchez n'existe pas.</p>
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="bg-primary-800 pt-32 pb-16 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-blue-100 mb-8">{category.description}</p>
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder={`Rechercher une ${category.name.toLowerCase()}...`}
                className="w-full py-3 px-5 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-4 text-gray-500" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">Filtres</h3>
                  <button 
                    className="lg:hidden text-gray-500 focus:outline-none"
                    onClick={toggleFilters}
                  >
                    <FaChevronDown className={`transform transition-transform duration-200 ${isFiltersOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                <div className={`p-5 space-y-6 ${isFiltersOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Prix mensuel</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{filters.priceRange[0]}€</span>
                        <span>{filters.priceRange[1]}€</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="10"
                        value={filters.priceRange[1]}
                        onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Note minimale</h4>
                    <select 
                      className="input"
                      value={filters.rating}
                      onChange={(e) => handleFilterChange('rating', parseFloat(e.target.value))}
                    >
                      <option value="0">Toutes les notes</option>
                      <option value="4">4+ étoiles</option>
                      <option value="3">3+ étoiles</option>
                      <option value="2">2+ étoiles</option>
                    </select>
                  </div>
                  
                  {/* Sort By */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Trier par</h4>
                    <select 
                      className="input"
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    >
                      <option value="recommended">Recommandés</option>
                      <option value="price-low">Prix (croissant)</option>
                      <option value="price-high">Prix (décroissant)</option>
                      <option value="rating">Meilleures notes</option>
                    </select>
                  </div>
                  
                  <button className="w-full btn btn-primary mt-4">
                    Appliquer les filtres
                  </button>
                </div>
              </div>
            </div>
            
            {/* Insurance List */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {filteredInsurances.length} résultats trouvés
                  </h2>
                  <div className="flex items-center">
                    <button 
                      className="lg:hidden flex items-center text-primary-600 mr-4"
                      onClick={toggleFilters}
                    >
                      <FaFilter className="mr-2" />
                      Filtres
                    </button>
                    <div className="hidden sm:block">
                      <select 
                        className="input"
                        value={filters.sortBy}
                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                      >
                        <option value="recommended">Recommandés</option>
                        <option value="price-low">Prix (croissant)</option>
                        <option value="price-high">Prix (décroissant)</option>
                        <option value="rating">Meilleures notes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {filteredInsurances.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredInsurances.map((insurance) => (
                    <InsuranceCard 
                      key={insurance.id} 
                      insurance={insurance}
                      showDetails
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Aucun résultat trouvé</h3>
                  <p className="text-gray-600 mb-4">
                    Aucune assurance ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
                  </p>
                  <button 
                    onClick={() => {
                      setFilters({
                        priceRange: [0, 200],
                        rating: 0,
                        sortBy: 'recommended'
                      })
                      setSearchTerm('')
                    }}
                    className="btn btn-outline-primary"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default CategoryPage