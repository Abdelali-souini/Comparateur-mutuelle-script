import { useState, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ComparisonTable from '../components/ui/ComparisonTable'
import InsuranceCard from '../components/ui/InsuranceCard'
import { mockedInsurances, mockedCategories } from '../data/mockData'

// Helper function to get query params
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const ComparisonPage = () => {
  const { categorySlug } = useParams()
  const query = useQuery()
  const selectedIds = query.get('selected')?.split(',') || []
  
  const [category, setCategory] = useState(null)
  const [selectedInsurances, setSelectedInsurances] = useState([])
  const [availableInsurances, setAvailableInsurances] = useState([])

  useEffect(() => {
    // Find the category
    const foundCategory = mockedCategories.find(cat => cat.slug === categorySlug)
    
    if (foundCategory) {
      setCategory(foundCategory)
      document.title = `Comparer les ${foundCategory.name} - AssuranceCompare`
      
      // Get insurances for this category
      const categoryInsurances = mockedInsurances.filter(
        insurance => insurance.categorySlug === categorySlug
      )
      
      // Split into selected and available
      const selected = []
      const available = []
      
      categoryInsurances.forEach(insurance => {
        if (selectedIds.includes(insurance.id.toString())) {
          selected.push(insurance)
        } else {
          available.push(insurance)
        }
      })
      
      setSelectedInsurances(selected)
      setAvailableInsurances(available)
    }
    
    // Scroll to top
    window.scrollTo(0, 0)
  }, [categorySlug, selectedIds])

  const addInsuranceToComparison = (insuranceId) => {
    const insurance = availableInsurances.find(ins => ins.id === insuranceId)
    if (!insurance) return
    
    setSelectedInsurances([...selectedInsurances, insurance])
    setAvailableInsurances(availableInsurances.filter(ins => ins.id !== insuranceId))
  }

  const removeInsuranceFromComparison = (insuranceId) => {
    const insurance = selectedInsurances.find(ins => ins.id === insuranceId)
    if (!insurance) return
    
    setAvailableInsurances([...availableInsurances, insurance])
    setSelectedInsurances(selectedInsurances.filter(ins => ins.id !== insuranceId))
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
            <h1 className="text-4xl font-bold mb-4">Comparer les {category.name}</h1>
            <p className="text-xl text-blue-100">
              Analysez côte à côte les différentes offres et choisissez celle qui correspond le mieux à vos besoins.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {/* Selected Insurances */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tableau comparatif</h2>
            
            <ComparisonTable 
              insurances={selectedInsurances} 
              category={category}
            />
            
            {selectedInsurances.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Assurances sélectionnées :</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInsurances.map(insurance => (
                    <div key={insurance.id} className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                      <span className="mr-2">{insurance.name}</span>
                      <button 
                        onClick={() => removeInsuranceFromComparison(insurance.id)}
                        className="text-error-500 hover:text-error-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Available Insurances */}
          {availableInsurances.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Ajouter d'autres offres à comparer
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableInsurances.map(insurance => (
                  <div key={insurance.id} className="card">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{insurance.name}</h3>
                        <div className="text-2xl font-bold text-primary-600">
                          {insurance.price}€<span className="text-sm font-normal text-gray-500">/mois</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => addInsuranceToComparison(insurance.id)}
                        className="w-full btn btn-primary"
                      >
                        Ajouter à la comparaison
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}

export default ComparisonPage