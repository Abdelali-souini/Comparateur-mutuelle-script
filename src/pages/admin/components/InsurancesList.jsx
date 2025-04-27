import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { mockedInsurances, mockedCategories } from '../../../data/mockData'

const InsurancesList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [insurances, setInsurances] = useState(mockedInsurances)
  const categories = mockedCategories
  
  // Filter insurances
  const filteredInsurances = insurances.filter(insurance => {
    // Filter by search term
    const matchesSearch = 
      insurance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      insurance.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Filter by category
    const matchesCategory = selectedCategory ? insurance.categorySlug === selectedCategory : true
    
    return matchesSearch && matchesCategory
  })
  
  // Delete insurance (mock)
  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette assurance ?')) {
      setInsurances(insurances.filter(insurance => insurance.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Gestion des Assurances
          </h1>
          <p className="text-gray-600">
            Ajoutez, modifiez ou supprimez les offres d'assurances.
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <Link 
            to="/admin/insurances/new"
            className="btn btn-primary flex items-center"
          >
            <FaPlus className="mr-2" />
            Ajouter une assurance
          </Link>
        </div>
      </div>
      
      {/* Filters */}
      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recherche
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher par nom ou description..."
                className="input pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrer par catégorie
            </label>
            <div className="relative">
              <select
                className="input pr-10"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Insurances List */}
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assurance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Note
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInsurances.length > 0 ? (
                filteredInsurances.map((insurance) => {
                  const category = categories.find(c => c.slug === insurance.categorySlug)
                  
                  return (
                    <tr key={insurance.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 object-contain" src={insurance.logo} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{insurance.name}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{insurance.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{category?.name || 'Non catégorisé'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{insurance.price}€/mois</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{insurance.rating.toFixed(1)}/5</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <Link 
                            to={`/admin/insurances/${insurance.id}`}
                            className="text-primary-600 hover:text-primary-800"
                          >
                            <FaEdit />
                          </Link>
                          <button 
                            onClick={() => handleDelete(insurance.id)}
                            className="text-error-500 hover:text-error-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                    Aucune assurance ne correspond à vos critères de recherche.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default InsurancesList