import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaStar } from 'react-icons/fa'

const ComparisonTable = ({ insurances = [], category = {} }) => {
  const [highlightedCol, setHighlightedCol] = useState(null)

  if (!insurances.length) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-2">Aucune assurance sélectionnée</h3>
        <p className="text-gray-600">Veuillez sélectionner au moins une assurance pour commencer la comparaison.</p>
      </div>
    )
  }

  // Get all unique criteria from the category
  const criteria = category.comparisonCriteria || []

  return (
    <div className="overflow-x-auto">
      <motion.table 
        className="w-full bg-white rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
              Comparaison
            </th>
            {insurances.map((insurance, index) => (
              <th 
                key={insurance.id} 
                className={`px-6 py-4 text-left text-sm font-medium uppercase tracking-wider border-b border-gray-200 ${
                  highlightedCol === index ? 'bg-primary-50' : 'bg-gray-50'
                }`}
                onMouseEnter={() => setHighlightedCol(index)}
                onMouseLeave={() => setHighlightedCol(null)}
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={insurance.logo} 
                    alt={insurance.name} 
                    className="h-16 w-32 object-contain mb-3" 
                  />
                  <span className="text-gray-800 font-semibold">{insurance.name}</span>
                  <div className="flex items-center mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(insurance.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">
                      {insurance.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 border-b border-gray-200">
              Prix mensuel
            </td>
            {insurances.map((insurance, index) => (
              <td 
                key={`${insurance.id}-price`}
                className={`px-6 py-4 whitespace-nowrap text-center text-sm border-b border-gray-200 ${
                  highlightedCol === index ? 'bg-primary-50' : ''
                }`}
              >
                <div className="text-xl font-bold text-primary-600">{insurance.price}€</div>
                <div className="text-xs text-gray-500">par mois</div>
              </td>
            ))}
          </tr>

          {criteria.map((criterion) => (
            <tr key={criterion.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 border-b border-gray-200">
                {criterion.name}
              </td>
              {insurances.map((insurance, index) => {
                const value = insurance.criteriaValues?.[criterion.id] || {}
                return (
                  <td 
                    key={`${insurance.id}-${criterion.id}`}
                    className={`px-6 py-4 text-center text-sm border-b border-gray-200 ${
                      highlightedCol === index ? 'bg-primary-50' : ''
                    }`}
                  >
                    {criterion.type === 'boolean' ? (
                      value.value ? (
                        <FaCheck className="mx-auto text-accent-500 text-lg" />
                      ) : (
                        <FaTimes className="mx-auto text-error-500 text-lg" />
                      )
                    ) : criterion.type === 'rating' ? (
                      <div className="flex justify-center">
                        {Array(5).fill(0).map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(value.value) 
                                ? 'text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    ) : (
                      <span>{value.value}</span>
                    )}
                    {value.notes && (
                      <div className="text-xs text-gray-500 mt-1">{value.notes}</div>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 border-b border-gray-200">
              Action
            </td>
            {insurances.map((insurance, index) => (
              <td 
                key={`${insurance.id}-action`}
                className={`px-6 py-4 text-center border-b border-gray-200 ${
                  highlightedCol === index ? 'bg-primary-50' : ''
                }`}
              >
                <button className="btn btn-primary">
                  Souscrire
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </motion.table>
    </div>
  )
}

export default ComparisonTable