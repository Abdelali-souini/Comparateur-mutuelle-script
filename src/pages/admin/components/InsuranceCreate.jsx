import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaImage, FaSave } from 'react-icons/fa'
import { mockedCategories } from '../../../data/mockData'

const InsuranceCreate = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    categorySlug: '',
    logo: '',
    features: ['']
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }))
  }

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }))
  }

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to create the insurance
    console.log('Form submitted:', formData)
    navigate('/admin/insurances')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Ajouter une nouvelle assurance
        </h1>
        <p className="text-gray-600">
          Remplissez le formulaire ci-dessous pour créer une nouvelle offre d'assurance.
        </p>
      </div>

      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'assurance
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Ex: AssurAuto Premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  name="categorySlug"
                  value={formData.categorySlug}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {mockedCategories.map(category => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix mensuel (€)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="input"
                  placeholder="Ex: 49.99"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="https://example.com/logo.png"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Choisir une image"
                  >
                    <FaImage />
                  </button>
                </div>
              </div>
            </div>

            {/* Description and Features */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="input"
                  placeholder="Décrivez les avantages de cette assurance..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Caractéristiques principales
                </label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        className="input"
                        placeholder="Ex: Couverture tous risques"
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="btn btn-error"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeature}
                    className="btn btn-secondary w-full"
                  >
                    Ajouter une caractéristique
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/insurances')}
              className="btn btn-secondary"
            >
              Annuler
            </button>
            <button type="submit" className="btn btn-primary flex items-center">
              <FaSave className="mr-2" />
              Enregistrer
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default InsuranceCreate