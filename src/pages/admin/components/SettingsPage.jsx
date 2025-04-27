import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSave } from 'react-icons/fa'

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: 'AssuranceCompare',
    siteEmail: 'contact@assurancecompare.fr',
    enableNotifications: true,
    enableNewsletter: true,
    maintenanceMode: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically save the settings to your backend
    console.log('Settings saved:', settings)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Paramètres
        </h1>
        <p className="text-gray-600">
          Configurez les paramètres généraux de la plateforme.
        </p>
      </div>

      <motion.div
        className="bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* General Settings */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Paramètres généraux
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du site
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email de contact
                  </label>
                  <input
                    type="email"
                    name="siteEmail"
                    value={settings.siteEmail}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* Features Settings */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Fonctionnalités
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="enableNotifications"
                    id="enableNotifications"
                    checked={settings.enableNotifications}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableNotifications" className="ml-2 block text-sm text-gray-900">
                    Activer les notifications
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="enableNewsletter"
                    id="enableNewsletter"
                    checked={settings.enableNewsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableNewsletter" className="ml-2 block text-sm text-gray-900">
                    Activer la newsletter
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    id="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-900">
                    Mode maintenance
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button type="submit" className="btn btn-primary flex items-center">
              <FaSave className="mr-2" />
              Enregistrer les paramètres
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default SettingsPage